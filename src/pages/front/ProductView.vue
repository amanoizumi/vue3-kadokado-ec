<template>
  <PageTitle :title="'商品一覽'"></PageTitle>
  <PageIsLoading v-show="isLoading"></PageIsLoading>
  <div class="mx-auto max-w-[1260px] px-20 lg:px-10">我是商品 ~ {{ product.title }} ~ 的頁面</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import toThousands from '@/utils/toThousands';
import { getFrontProductApi } from '@/api/axios';
import emitter from '@/services/emitter';

export default {
  setup() {
    const isLoading = ref(false);
    const route = useRoute();
    const product = ref({});

    onMounted(() => {
      isLoading.value = true;
      const id = route.path.split('/').pop();
      getFrontProductApi(id)
        .then((res) => {
          product.value = res.data.product;
          isLoading.value = false;
        })
        .catch((err) => {
          console.log(err);
          isLoading.value = false;
        });
    });

    return {
      isLoading,
      product
    };
  },
};
</script>
