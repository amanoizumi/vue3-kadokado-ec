<template>
  <PageTitle :title="'後台'"></PageTitle>
  <!-- 導覽列 -->
  <nav
    class="flex flex-shrink-0 flex-col border-r bg-gradient-to-b from-stone-100 via-stone-100 to-stone-200 font-sans sm:fixed sm:inset-y-0 sm:w-60"
  >
    <h1
      class="font-display mb-4 border-b border-stone-500/20 px-4 pt-5 pb-4 text-2xl text-zinc-600"
    >
      K
      <span class="text-yellow-500">A</span>DO KADO
    </h1>
    <!-- 主要選單 -->
    <ul class>
      <li class v-for="item in menuItems" :key="item.to">
        <RouterLink
          :to="item.to"
          class="flex items-center px-4 py-4 text-lg hover:text-yellow-600"
          :class="isActive(item.to) ? 'text-yellow-600' : 'text-stone-700'"
        >
          <component :is="item.icon" class="mt-[2px] mr-2 h-5 w-5" />
          {{ item.text }}
        </RouterLink>
      </li>
    </ul>
  </nav>
  <main class="relative ml-0 mt-0 min-h-screen bg-neutral-100 font-sans sm:ml-60">
    <AlertMessage v-if="showAlert" :prop-alert-obj="alertObj" :key="num" />
    <!-- 為避免出現非同步的錯誤，等遠端資料取回後再載入 router-view -->
    <router-view v-if="checkSuccess"></router-view>
  </main>
</template>

<script>
import HeroiconsSolidTable from '~icons/heroicons-solid/table';
import HeroiconsSolidChartPie from '~icons/heroicons-solid/chart-pie';
import HeroiconsSolidCurrencyDollar from '~icons/heroicons-solid/currency-dollar';
import HeroiconsSolidUpload from '~icons/heroicons-solid/upload';
import HeroiconsSolidDocumentText from '~icons/heroicons-solid/document-text';

import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { checkSinginApi } from '@/api/axios';

import emitter from '@/services/emitter';

export default {
  components: {
    HeroiconsSolidTable,
    HeroiconsSolidChartPie,
    HeroiconsSolidCurrencyDollar,
    HeroiconsSolidUpload,
    HeroiconsSolidDocumentText,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const checkSuccess = ref(false);
    const showAlert = ref(false);
    const alertObj = ref({});

    const num = ref(0);

    // 導覽列物件
    const menuItems = [
      { to: '/dashboard', text: '產品列表', icon: 'heroicons-solid-table' },
      { to: '/dashboard/orders', text: '訂單列表', icon: 'heroicons-solid-chart-pie' },
      { to: '/dashboard/coupons', text: '優惠券', icon: 'heroicons-solid-currency-dollar' },
      { to: '/dashboard/articles', text: '文章列表', icon: 'heroicons-solid-document-text' },
    ];

    onMounted(() => {
      checkSinginApi()
        .then((res) => {
          checkSuccess.value = true;
        })
        .catch((err) => {
          console.dir(err);
          showAlert.value = true;
          emitter.emit('alert-data', {
            msg: '您尚無權限，無法進入管理頁面！',
            state: 'danger',
            showButton: false,
          });

          setTimeout(() => {
            router.push('/login');
          }, 2000);
        });

      emitter.on('alert-data', (data) => {
        // 刷新生命週期
        num.value++;
        showAlert.value = true;
        alertObj.value = data;
      });

      emitter.on('clear-alert', () => {
        showAlert.value = false;
        alertObj.value = {};
      });
    });

    // 筆記：computed 方法接受一個 getter 函式，會回傳一個唯讀的響應式 ref 物件
    const activeItem = computed(() => [...menuItems].find((item) => route.path === item.to));
    const isActive = (to) => to === activeItem.value.to;

    return {
      menuItems,
      showAlert,
      alertObj,
      checkSuccess,
      num,
      isActive,
    };
  },
};
</script>
