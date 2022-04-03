<template>
  <PageTitle :title="'購物車'"></PageTitle>
  <PageIsLoading v-show="isLoading"></PageIsLoading>
  <div class="mx-auto mb-20 max-w-[1260px] px-5 lg:px-20" :class="{ hidden: isLoading }">
    <div v-if="cartData.carts?.length >= 1" class="mb-6 overflow-x-auto">
      <h2 class="mb-8 text-center text-2xl text-stone-700">購物車內的商品</h2>
      <table class="text-center">
        <thead class="border-b-2 text-yellow-900/80">
          <tr>
            <th class="w-1/6 py-1">商品圖片</th>
            <th class="w-1/6">商品名稱</th>
            <th class="w-1/6">單價</th>
            <th class="w-1/6">數量</th>
            <th class="w-1/6">價格</th>
            <th class="w-1/6"></th>
          </tr>
        </thead>
        <tbody class="font-sans tracking-wider text-stone-800">
          <tr v-for="cartItem in cartData.carts" :key="cartItem.id" class="border-b">
            <td class="py-5">
              <div class="overflow-hidden rounded">
                <img :src="cartItem.product.imageUrl" class="object-cover" alt />
              </div>
            </td>
            <td>{{ cartItem.product.title }}</td>
            <td>
              <span>NT$&nbsp;</span>
              {{ toThousands(cartItem.product.price) }}
            </td>
            <td>
              <div class="flex h-full items-center justify-center">
                <button
                  type="button"
                  class="p-2"
                  :class="{
                    'hover: cursor-not-allowed text-stone-400 ': cartItem.qty === 1,
                    'hover:text-yellow-600': cartItem.qty > 1,
                    'cursor-progress': cursorProgress,
                  }"
                  @click="editFrontCart(cartItem, 'minus')"
                  :disabled="cartItem.qty === 1 || cursorProgress"
                >
                  <heroicons-solid-minus />
                </button>
                <input
                  type="text"
                  class="w-12 border-0 text-center focus:border-yellow-500 focus:bg-white focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                  maxlength="2"
                  @change="editFrontCart(cartItem, cartItem.qty)"
                  v-model.number="cartItem.qty"
                  :disabled="cursorProgress"
                />
                <button
                  type="button"
                  class="p-2 hover:text-yellow-600"
                  :disabled="cursorProgress"
                  :class="{ 'cursor-progress': cursorProgress }"
                  @click="editFrontCart(cartItem, 'plus')"
                >
                  <heroicons-solid-plus />
                </button>
                <span>{{ cartItem.product.unit }}</span>
              </div>
            </td>

            <td>
              <span>NT$&nbsp;</span>
              {{ toThousands(cartItem.total) }}
            </td>
            <td>
              <button
                :disabled="cursorProgress"
                type="button"
                class="duration-100 hover:text-xl hover:text-rose-600"
                title="刪除該商品"
                @click="deleteFrontCart(cartItem.id)"
              >
                <heroicons-solid-x />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex">
        <button
          :disabled="cursorProgress"
          type="button"
          class="mr-auto p-2 text-stone-500 hover:text-black"
          @click="checkDeleteAllFrontCart"
        >清空購物車</button>
        <p class="mr-10 flex items-center text-lg">
          合計：
          <span>NT$&nbsp;</span>
          {{ toThousands(cartData.final_total) }}
        </p>
      </div>
    </div>
    <div v-else>購物車現在沒有商品</div>
    <OrderForm v-if="cartData.carts?.length >= 1" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getFrontCartApi } from '@/api/axios';
import { editFrontCartApi } from '@/api/axios';
import { deleteFrontCartApi } from '@/api/axios';
import { deleteAllFrontCartApi } from '@/api/axios';
import emitter from '@/services/emitter';
import toThousands from '@/utils/toThousands';

export default {
  setup() {
    const isLoading = ref(false);
    const cursorProgress = ref(false);
    const cartData = ref({
      carts: []
    });
    let cartResult = null;
    let num = 0;

    const getFrontCart = () => {
      // 只有第一次取購物車時打開 loading
      if (num == 0) {
        isLoading.value = true;
      }
      num++;
      getFrontCartApi()
        .then((res) => {
          isLoading.value = false;

          cartData.value = res.data.data;
        })
        .catch((err) => {
          console.dir(err);
          isLoading.value = false;
        });
    };

    const editFrontCart = (item, handler) => {
      const { id } = item;

      let qty = item.qty;

      if (handler === 'minus') {
        qty -= 1;
      } else if (handler === 'plus') {
        qty += 1;
      } else if (typeof handler === 'number' && handler >= 1) {
        // 錯誤處理
        handler = Number(handler.toFixed());
        qty = handler;
      } else {
        qty = 1;
      }
      cursorProgress.value = true;

      editFrontCartApi(id, qty)
        .then((res) => {
          // 刷新購物車
          getFrontCart();
          cursorProgress.value = false;
        })
        .catch((err) => {
          console.log(err);
          cursorProgress.value = false;
        });
    };

    const deleteFrontCart = (id) => {
      cursorProgress.value = true;
      deleteFrontCartApi(id)
        .then((res) => {
          getFrontCart();
          emitter.emit('update-cartlen');
          cursorProgress.value = false;
        })
        .catch((err) => {
          console.log(err);
          cursorProgress.value = false;
        });
    };

    const checkDeleteAllFrontCart = () => {
      emitter.emit('open-front-alert', {
        msg: '確定要清空購物車嗎？',
        showButton: true,
        state: 'warning',
        backdrop: true,
      });
    };

    emitter.on('front-alert-result', (result) => {
      cartResult = result;
      if (cartResult) {
        deleteAllFrontCartApi()
          .then((res) => {
            cartData.value = {carts: []};
            emitter.emit('update-cartlen');
            emitter.emit('close-front-alert');
          })
          .catch((err) => {
            console.dir(err);
          });
      } else if (!cartResult) {
        emitter.emit('close-front-alert');
      }
    });

    onMounted(() => {
      isLoading.value = true;
      getFrontCart();
    });
    return {
      cartData,
      isLoading,
      cursorProgress,
      toThousands,
      editFrontCart,
      deleteFrontCart,
      // deleteAllFrontCart,
      checkDeleteAllFrontCart,
    };
  },
};
</script>
