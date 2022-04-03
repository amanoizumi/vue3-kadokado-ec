<template>
  <RouterLink
    to="/cart"
    class="relative mt-1 flex items-center text-xl hover:text-sky-500"
    :class="{ 'text-sky-500': path === '/cart' }"
  >
    <component is="heroicons-outline-shopping-cart" />
    <span
      class="absolute -top-3 -right-3 rounded-lg bg-yellow-600 px-2 py-[2px] text-xs text-white"
    >
      {{
        cartLen
      }}
    </span>
  </RouterLink>
</template>

<script>
import HeroiconsOutlineShoppingCart from '~icons/heroicons-outline/shopping-cart';
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getFrontCartApi } from '@/api/axios';

import emitter from '@/services/emitter';

export default {
  components: {
    HeroiconsOutlineShoppingCart,
  },

  setup(props, { emit }) {
    const route = useRoute();
    const path = ref('');

    // 購物車 icon 數字
    const cartLen = ref(0);

    const getFrontCartLen = () => {
      getFrontCartApi()
        .then((res) => {
          cartLen.value = res.data.data.carts.length;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    emitter.on('update-cartlen', getFrontCartLen);

    onMounted(() => {
      getFrontCartLen();

      path.value = route.path;
      watch(
        () => route.path,
        (n, o) => {
          path.value = route.path;
        }
      );
    });

    return {
      path,
      cartLen,
    };
  },
};
</script>
