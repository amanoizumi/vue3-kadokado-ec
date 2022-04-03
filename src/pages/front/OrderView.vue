<template>
  <div v-if="orderData !== null">
    <h2 class="mb-8 text-center text-2xl text-stone-700">我們已收到您的訂單</h2>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getFrontOrderApi } from '@/api/axios';

export default {
  setup(props, { emit }) {
    const orderData = ref({});

    onMounted(() => {
      const route = useRoute();
      const router = useRouter();
      const id = route.path.split('/').pop();

      getFrontOrderApi(id).then((res) => {
        orderData.value = res.data.order;
        // 如果沒有該 id 資料就跳轉至首頁
        if (orderData.value === null) {
          router.push('/');
        }
      }).catch((err) => {
        console.log(err);
      });
    });
    return {
      orderData
    };
  },
};
</script>
