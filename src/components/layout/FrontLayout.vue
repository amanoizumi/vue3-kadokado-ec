<template>
  <!-- 導覽列 -->
  <div id="navbar" class="sticky top-0 z-40 bg-white shadow-md">
    <nav
      class="mx-auto flex max-w-[1260px] flex-1 items-center px-[50px] pt-[18px] pb-[18px] lg:justify-between"
    >
      <RouterLink class="hidden sm:block" to="/">
        <h1 class="flex font-display text-3xl text-zinc-600" title="KADOKADO 手工香皂">
          K
          <span class="text-yellow-500">A</span>DO KADO
        </h1>
      </RouterLink>
      <!-- 主要選單 -->
      <ul class="mx-auto ml-auto grid grid-cols-2 font-thin lg:mx-auto lg:flex lg:items-center">
        <li class="px-4" v-for="item in navbarItems" :key="item.to">
          <RouterLink
            :to="item.to"
            class="hvr-underline-from-center flex items-center py-2 text-lg hover:text-yellow-600"
            :class="{ 'text-yellow-600 before:left-0 before:right-0': path === item.to }"
          >{{ item.text }}</RouterLink>
        </li>
      </ul>
      <ul class="flex flex-col lg:flex-row">
        <li class="px-4">
          <RouterLink
            to="/favlist"
            class="flex items-center text-xl hover:text-rose-400"
            :class="{ 'text-rose-400': path === '/favlist' }"
          >
            <component is="heroicons-solid-heart"></component>
          </RouterLink>
        </li>
        <li class="px-4">
          <CartIcon class="mt-4 lg:mt-0" />
        </li>
      </ul>
    </nav>
  </div>
  <main class="min-h-screen pt-10">
    <FrontAlertToast v-if="showAlert" :prop-alert-obj="alertObj" />
    <router-view></router-view>
  </main>
  <footer class="bg-yellow-600 py-10 tracking-wider text-white">
    <div class="mx-auto flex h-full max-w-[800px] flex-col px-10">
      <h2 class="mb-2 text-2xl font-bold">Contact</h2>
      <a href="tel:+886-988745554" class="mb-2 flex">
        <heroicons-solid-phone class="mt-[3px] mr-1" />連絡電話：0988-745554
      </a>
      <a href="mailto:kadokado@domjs.com" class="mb-2 flex">
        <heroicons-solid-mail class="mt-[3px] mr-1" />電子信箱：kadokado@domjs.com
      </a>
      <p>營業時間：週一 ~ 週五 早上 8 : 30 至晚上 17 : 30</p>
      <p class="mt-10 text-sm">©2022 CopyrightsAll KADOKADO Rights Reserved | 個人練習作品，非商業用途</p>
    </div>
  </footer>
</template>

<script>
import HeroiconsSolidHeart from '~icons/heroicons-solid/heart';

import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import emitter from '@/services/emitter';

export default {
  components: {
    HeroiconsSolidHeart,
  },
  setup() {
    const route = useRoute();
    const navbarItems = [
      { to: '/', text: '首頁' },
      { to: '/products', text: '商品一覽' },
      { to: '/locations', text: '門市據點' },
      { to: '/about', text: '公司簡介' },
    ];
    const showAlert = ref(false);
    const alertObj = ref({});
    const num = ref(0);


    emitter.on('open-front-alert', (data) => {
      // 刷新生命週期
      num.value++;
      showAlert.value = true;
      alertObj.value = data;
    });

    emitter.on('close-front-alert', () => {
      showAlert.value = false;
      alertObj.value = {};
    });



    // 監聽路由，讓 router link 和 icon 有樣式上的改變
    const path = ref('');

    onMounted(() => {
      path.value = route.path;
      watch(() => route.path,
        (n, o) => {
          path.value = route.path;
        });

    });

    return {
      alertObj,
      navbarItems,
      showAlert,
      path,
      num,
    };
  },
};
</script>
