<template>
  <PageTitle :title="'商品一覽'"></PageTitle>
  <PageIsLoading v-show="isLoading"></PageIsLoading>
  <div class="mx-auto max-w-[1260px] px-5 lg:px-10">
    <!-- 篩選 -->
    <div class="mb-8 flex flex-col items-center text-lg md:flex-row md:justify-center">
      <div v-for="category in categoryArr" :key="category" class="mx-2 lg:mx-4">
        <button
          type="button"
          class="px-3 py-1 lg:px-10 lg:py-2"
          :class="{
            'rounded  font-medium text-green-800': categoryStr === category,
            'hover:text-green-700': categoryStr !== category,
          }"
          @click="categoryStr = category"
        >
          {{ category }}
        </button>
      </div>
    </div>
    <!-- 商品列表 -->
    <ul class="mb-8 grid grid-cols-2 gap-x-6 gap-y-8 bg-white lg:grid-cols-4 lg:gap-x-4 lg:gap-y-6">
      <li
        v-for="product in filteredData"
        class="relative cursor-pointer overflow-hidden rounded shadow-lg"
        @click="linkToProduct(product.id)"
      >
        <div class="relative overflow-hidden">
          <span class="absolute left-0 z-10 bg-yellow-500/80 p-1 text-xs tracking-widest text-white">
            {{ product.category }}
          </span>
          <FavlistIcon
            class="absolute right-2 top-2 z-10 text-2xl text-rose-400"
            :prop-id="product.id"
            :prop-favlist-local="favlistData"
          />
          <img :src="product.imageUrl" class="h-[200px] object-cover duration-300 hover:scale-125" alt />
        </div>
        <div class="flex min-h-[200px] flex-col justify-between py-5 px-5">
          <div>
            <p class="mb-3 px-2 text-center text-xl font-medium tracking-wider text-stone-700">
              【 {{ product.title }} 】
            </p>
            <p class="mb-2 flex items-center justify-center px-3 font-sans text-xl text-green-800">
              <span>NT$&nbsp;{{ toThousands(product.price) }}</span>
              <span class="ml-2 text-sm text-stone-500 line-through"
                >NT$&nbsp;{{ toThousands(product.origin_price) }}</span
              >
            </p>
          </div>
          <button
            type="button"
            class="flex justify-center rounded bg-yellow-600 py-3 text-lg tracking-wider text-white hover:bg-yellow-700 focus:ring focus:ring-yellow-400"
            @click.stop="addToCart(product.id)"
            :disabled="addCartLoading"
            :class="{ 'cursor-not-allowed': addCartLoading }"
          >
            <span v-if="addCartLoading && addCartLoadingId === product.id" class="flex items-center">
              加入中...
              <div class="ml-4 h-[10px] w-[10px] animate-ping rounded-full bg-white"></div>
            </span>
            <span class="flex" v-else>
              加到購物車
              <HeroiconsOutlineShoppingCart class="ml-1 mt-[6px] text-base" />
            </span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getFrontProductsApi } from '@/api/axios';
import { postFrontCartApi } from '@/api/axios';
import emitter from '@/services/emitter';

import toThousands from '@/utils/toThousands';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorageFn';

export default {
  setup() {
    const products = ref([]);

    const filteredData = ref([]);
    const categoryStr = ref('');
    const isLoading = ref(true);
    const addCartLoading = ref(false);
    const addCartLoadingId = ref('');
    const router = useRouter();
    const favlistData = ref({});

    const categoryArr = ['全部商品', '手工香皂', '造型香皂', '天然精油'];

    watch(categoryStr, (n, o) => {
      if (n === '全部商品') {
        filteredData.value = products.value;
      } else {
        filteredData.value = products.value.filter((item) => item.category === n);
      }
    });

    const getFrontProducts = () => {
      getFrontProductsApi()
        .then((res) => {
          products.value = res.data.products;
          categoryStr.value = '全部商品';
          isLoading.value = false;
        })
        .catch((err) => {
          emitter.emit('open-front-alert', {
            msg: '取得產品列表失敗！',
            showButton: false,
            state: 'danger',
          });
          isLoading.value = false;
        });
    };

    const addToCart = (id) => {
      addCartLoadingId.value = id;
      addCartLoading.value = true;

      postFrontCartApi(id)
        .then((res) => {
          emitter.emit('open-front-alert', {
            msg: res.data.message,
            showButton: false,
            state: 'success',
          });
          addCartLoading.value = false;
          addCartLoadingId.value = '';

          setTimeout(() => {
            emitter.emit('close-front-alert');
          }, 1500);
          emitter.emit('update-cartlen');
        })
        .catch((err) => {
          emitter.emit('open-front-alert', {
            msg: '無法新增商品至購物車！',
            showButton: false,
            state: 'danger',
          });

          addCartLoading.value = false;
          addCartLoadingId.value = '';

          setTimeout(() => {
            emitter.emit('close-front-alert');
          }, 1500);
        });
    };

    const linkToProduct = (id) => {
      router.push('/product/' + id);
    };

    onMounted(() => {
      getFrontProducts();

      const data = getLocalStorage('favlistLocalStorage');
      if (data === null) {
        setLocalStorage('favlistLocalStorage', { favlistData: [] });
      }
      // 要是響應式，否則 bind 的值永遠會是預設的 null
      favlistData.value = getLocalStorage('favlistLocalStorage');
    });

    return {
      products,
      filteredData,
      categoryStr,
      isLoading,
      categoryArr,
      favlistData,
      addCartLoading,
      addCartLoadingId,
      toThousands,
      addToCart,
      linkToProduct,
    };
  },
};
</script>
