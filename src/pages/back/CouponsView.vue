<template>
  <DashboardTopArea :page-title="'優惠券列表頁面TOP'" />優惠券列表
</template>

<script>
import { onMounted } from 'vue';
import { getBackCouponsApi } from '@/api/axios';


export default {
  setup() {
    const getCoupons = () => {

      getBackCouponsApi().then((res) => {
        console.log('優惠券列表', res);
      }).catch((err) => {
        console.log(err);
      });
    };

    onMounted(() => {
      getCoupons();
    });
  },
};
</script>
