<template>
  <PageTitle :title="'我關注的商品'"></PageTitle>
  我是我關注的商品頁面
  <div v-if="products.length === 0">目前沒有關注的商品</div>
  <div v-else>我關注的商品
    {{ products }}
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorageFn';
import { getFrontProductApi } from '@/api/axios';

export default {
  setup() {
    let favlist = {
      favlistData: [],
    };

    const products = ref([]);

    const pushRenderData = () => {

      favlist.favlistData.forEach((item) => {
        getFrontProductApi(item)
          .then((res) => {
            console.log(res.data.product);
            products.value.push(res.data.product);
          })
          .catch((err) => {
            console.dir(err);
          });
      });
    };

    onMounted(() => {
      favlist = getLocalStorage('favlistLocalStorage');

      if (favlist.favlistData.length !== 0) {
        pushRenderData();
      }

      console.log(favlist);
    });
    return {
      favlist,
      products
    };
  },
};
</script>
