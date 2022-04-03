<template>
  <div
    class="absolute top-0 left-0 right-0 z-10 min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200"
  >
    <div class="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-10">
      <div class="flex justify-between border-b pt-5 pb-[10px]">
        <h2 class="mb-1 text-xl font-medium text-green-800">
          <span>編輯訂單</span>
        </h2>
        <div>
          <button type="button" title="取消" @click="closeEditOrder">
            <heroicons-solid-x class="text-xl text-stone-600 hover:text-red-600" />
          </button>
        </div>
      </div>
      <!-- 內容 -->
      <div class="mt-8">
        <Form @submit="submitEditOrder">
          <div class="mb-6">
            <p class="mb-2 font-medium tracking-wide text-stone-600">
              訂單編號
              <span class="ml-1 text-sm text-stone-500">ID</span>
            </p>
            {{ tempOrder.id }}
          </div>
          <div class="mb-6">
            <p class="mb-2 font-medium tracking-wide text-stone-600">
              訂單產生時間
              <span class="ml-1 text-sm text-stone-500">Create At</span>
            </p>
            {{ toDateString(tempOrder.create_at) }}
          </div>
          <label for="orderName">
            <p class="font-medium tracking-wide text-stone-600">
              姓名
              <span class="ml-1 text-sm text-stone-500">Name</span>
              <ErrorMessage name="姓名" class="ml-2 text-sm text-red-600"></ErrorMessage>
            </p>
            <Field
              type="text"
              id="orderName"
              class="input-style"
              placeholder="請輸入姓名"
              name="姓名"
              v-model.trim="user.name"
              rules="required"
            ></Field>
          </label>
          <label for="orderTel">
            <p class="font-medium tracking-wide text-stone-600">
              電話
              <span class="ml-1 text-sm text-stone-500">Tel</span>
              <ErrorMessage name="電話" class="ml-2 text-sm text-red-600"></ErrorMessage>
            </p>
            <Field
              type="tel"
              id="orderTel"
              class="input-style"
              placeholder="請輸入電話"
              name="電話"
              v-model="user.tel"
              rules="required|min:8|numeric"
            ></Field>
          </label>

          <p class="mb-2 font-medium tracking-wide text-stone-600">
            購買商品
            <span class="ml-1 text-sm text-stone-500">Category</span>
          </p>
          <div class="mb-6 overflow-x-auto">
            <table class="w-[640px] border border-stone-500 bg-white text-stone-800">
              <thead class="border-b border-stone-600">
                <tr class="bg-stone-200 text-left text-stone-900/60">
                  <th class="w-3/12 py-1 px-3">商品名稱</th>
                  <th class="w-4/12 px-2">數量</th>
                  <th class="w-2/12 px-2">單價</th>
                  <th class="w-2/12 px-2">小計</th>
                  <th class="w-2/12 px-2">刪除</th>
                </tr>
              </thead>
              <tbody class="border-b border-stone-500 bg-stone-50">
                <tr v-for="(product, i) in productsArr" :key="product.id">
                  <td class="py-2 px-3">{{ product.product.title }}</td>
                  <td class="py-2 px-3">
                    <div class="flex h-full items-center justify-start">
                      <button
                        type="button"
                        class="p-2"
                        :class="{
                          'hover: cursor-not-allowed text-stone-400 ': product.qty === 1,
                          'hover:text-yellow-600': product.qty > 1,
                          'cursor-progress': cursorProgress,
                        }"
                        :disabled="product.qty === 1"
                        @click="orderProductsHandler(product, 'minus')"
                      >
                        <heroicons-solid-minus />
                      </button>
                      <input
                        type="text"
                        class="w-12 border-0 bg-transparent text-center focus:border-yellow-500 focus:bg-white focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                        maxlength="2"
                        v-model.number="product.qty"
                        @change="orderProductsHandler(product, product.qty)"
                      />
                      <button
                        type="button"
                        class="p-2 hover:text-yellow-600"
                        :class="{ 'cursor-progress': cursorProgress }"
                        @click="orderProductsHandler(product, 'plus')"
                      >
                        <heroicons-solid-plus />
                      </button>
                      <span>{{ product.product.unit }}</span>
                    </div>
                  </td>
                  <td class="py-2 px-3">{{ toThousands(product.product.price) }} 元</td>
                  <td class="py-2 px-3">{{ toThousands(product.total) }}</td>
                  <td class="py-2 px-3">
                    <button type="button" class="hover:text-red-600">
                      <heroicons-outline-trash class="h-6 w-6" />
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot class>
                <tr>
                  <td class="py-2 px-2" colspan="5">
                    訂單總計：
                    <span class="text-rose-800">{{ toThousands(tempOrder.total) }} 元</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p class="font-medium tracking-wide text-stone-600">
            付款狀態
            <span class="ml-1 text-sm text-stone-500">Enabled</span>
          </p>
          <div class="mb-3 flex py-3">
            <label for="paid" class="mr-3 flex items-center">
              <input
                type="radio"
                class="mr-2 mt-[2px] border-2 border-gray-300 text-green-800 focus:border-gray-300 focus:ring-green-500"
                v-model="tempOrder.is_paid"
                value="已付款"
                id="paid"
              />
              <span>已付款</span>
            </label>
            <label for="notPaid" class="flex items-center">
              <input
                type="radio"
                class="mr-2 mt-[2px] border-2 border-gray-300 text-green-800 focus:border-gray-300 focus:ring-green-500"
                v-model="tempOrder.is_paid"
                value="未付款"
                id="notPaid"
              />
              <span>未付款</span>
            </label>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="fixed bottom-10 right-10 ml-auto h-[44px] w-[142px] border border-teal-500 bg-stone-100 text-lg text-teal-500 shadow-md hover:bg-teal-500 hover:text-white"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">提交訂單資料</span>
              <span v-else class="flex items-center justify-center">提交中 ...</span>
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { editBackOrderApi } from '@/api/axios';
import toThousands from '@/utils/toThousands';
import toDateString from '@/utils/toDateString';
import cloneDeep from 'lodash/cloneDeep';
import emitter from '@/services/emitter';

export default {
  emits: ['hide-edit-order-area', 'init-orders'],
  props: {
    'prop-order': Object,
  },
  setup(props, { emit }) {
    const tempOrder = ref({});
    const isLoading = ref(false);
    const cursorProgress = ref(false);
    const productsIdArr = ref([]);
    const productsArr = ref([]);
    const user = ref({});

    const resetEnableRadio = () => {
      tempOrder.value.is_paid = tempOrder.value.is_paid === 1 ? '已付款' : '未付款';
    };
    // 隱藏編輯區
    const closeEditOrder = () => {
      emit('hide-edit-order-area');
    };

    const orderProductsHandler = (item, handler) => {
      const { id } = item;

      if (handler === 'minus') {
        item.qty -= 1;
      } else if (handler === 'plus') {
        item.qty += 1;
      } else if (typeof handler === 'number' && handler >= 1) {
        // 錯誤處理
        handler = Number(handler.toFixed());
        item.qty = handler;
      } else {
        item.qty = 1;
      }

      item.total = item.product.price * item.qty;
      item.final_total = item.total;

      tempOrder.value.products[item.id].total = item.total;
      tempOrder.value.products[item.id].final_total = item.final_total;
      tempOrder.value.products[item.id].qty = item.qty;

      const arr = Object.values(tempOrder.value.products);
      const finalTotal = arr.reduce((prev, curr) => prev + curr.final_total, 0);

      tempOrder.value.total = finalTotal;

    };


    const submitEditOrder = () => {
      tempOrder.value.is_paid = tempOrder.value.is_paid === '已付款' ? true : false;

      const obj = {
        data: tempOrder.value,
        user: user.value
      }
      isLoading.value = true
      editBackOrderApi(tempOrder.value.id, obj).then((res) => {
        closeEditOrder();
        emitter.emit('alert-data', {
          msg: res.data.message,
          state: 'success',
          showButton: false,
        });

        setTimeout(() => {
          emitter.emit('clear-alert');
        }, 1500);
        isLoading.value = false;

      }).catch((err) => {
        isLoading.value = false
        console.dir(err);
      })

    };

    onMounted(() => {
      tempOrder.value = cloneDeep(props.propOrder);
      const cloneProducts = cloneDeep(props.propOrder.products);
      user.value = cloneDeep(props.propOrder.user);

      productsIdArr.value = Object.keys(cloneProducts);
      productsArr.value = Object.values(cloneProducts);

      console.log(tempOrder.value);

      resetEnableRadio();
    });

    return {
      isLoading,
      tempOrder,
      productsArr,
      user,
      cursorProgress,
      orderProductsHandler,
      close,
      closeEditOrder,
      submitEditOrder,
      toThousands,
      toDateString,
    };
  },
};
</script>
