<template>
  <DashboardTopArea :page-title="'文章列表頁面TOP'" />
  文章列表
</template>

<script>
import { onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const getArticles = () => {
      const url = `${import.meta.env.VITE_API_URL}/api/${import.meta.env.VITE_API_PATH}/admin/articles`;

      axios.get(url).then((res) => {
        console.log('產品列表', res);
      });
    };

    onMounted(() => {
      getArticles();
    });
  },
};
</script>
