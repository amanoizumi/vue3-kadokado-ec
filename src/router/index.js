import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '首頁',
    component: () => import('../components/layout/FrontLayout.vue'),
    children: [
      {
        // 前台預設首頁為 landing page
        path: '',
        component: () => import('../pages/front/IndexView.vue'),
      },
      {
        path: 'products',
        component: () => import('../pages/front/ProductsView.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../pages/front/ProductView.vue'),
      },
      {
        path: 'order/:id',
        component: () => import('../pages/front/OrderView.vue'),
      },
      {
        path: 'favlist',
        component: () => import('../pages/front/FavlistView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../pages/front/CartView.vue'),
      },
      {
        path: 'locations',
        component: () => import('../pages/front/LocationsView.vue'),
      },
      {
        path: 'about',
        component: () => import('../pages/front/AboutView.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: '後台登入',
    component: () => import('../pages/front/LogInView.vue'),
  },
  {
    path: '/dashboard',
    name: '後台',
    component: () => import('../components/layout/DashboardLayout.vue'),
    children: [
      {
        // 後台預設首頁為產品列表
        path: '',
        component: () => import('../pages/back/ProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../pages/back/OrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../pages/back/CouponsView.vue'),
      },
      {
        path: 'articles',
        component: () => import('../pages/back/ArticlesView.vue'),
      },
    ]
  },
  {
    // 輸入亂碼網址時重新導向到首頁
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return {
      top: 0,
    };
  },
  routes,
});

export default router;
