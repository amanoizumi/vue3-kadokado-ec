<template>
  <PageTitle :title="'後台登入'"></PageTitle>
  <!-- 背景 -->
  <div class="bg-gradient-to-tl from-slate-600 to-sky-700 px-5 md:px-20">
    <div class="flex min-h-screen items-center justify-center">
      <!-- 登入區 -->
      <div
        class="grid min-h-[720px] w-[1200px] overflow-hidden rounded-lg bg-yellow-500 shadow-xl md:grid-cols-2"
      >
        <div class="hidden bg-[url('@/assets/images/login.svg')] bg-center md:block"></div>

        <div class="relative flex flex-col items-center bg-neutral-50 px-4 pt-32 md:px-10">
          <AlertMessage v-if="showAlert" :prop-alert-obj="alertObj" />
          <h1
            class="font-display mb-4 flex py-3 text-center text-4xl font-medium tracking-wider text-zinc-600"
          >
            K
            <span class="text-yellow-500">A</span>DO KADO
          </h1>

          <Form class="flex w-[250px] flex-col items-center justify-center px-2" @submit="login">
            <label for="email" class="mb-4">
              <h2 class="mb-1 text-lg font-medium text-zinc-700">帳號</h2>

              <Field
                id="email"
                name="帳號"
                type="email"
                class="w-full rounded border-zinc-300 focus:border-yellow-400 focus:ring-yellow-400"
                :class="{ 'bg-gray-100': isDisabled }"
                placeholder="請填入帳號（電子信箱）"
                rules="email|required"
                :disabled="isDisabled"
                v-model.trim="emailStr"
              ></Field>
              <ErrorMessage name="帳號" class="ml-[2px] text-sm text-rose-500"></ErrorMessage>
            </label>
            <label for="password" class="relative mb-10">
              <h2 class="mb-1 text-lg font-medium text-zinc-700">密碼</h2>
              <Field
                id="password"
                name="密碼"
                type="password"
                class="w-full rounded border-zinc-300 focus:border-yellow-400 focus:ring-yellow-400"
                :class="{ 'bg-gray-100': isDisabled }"
                placeholder="請填入密碼"
                rules="required"
                :disabled="isDisabled"
                v-model.trim="passwordStr"
              ></Field>
              <ErrorMessage name="密碼" class="ml-[2px] text-sm text-rose-500"></ErrorMessage>
            </label>
            <button
              type="submit"
              :disabled="isDisabled"
              class="mb-6 flex w-full items-center justify-center rounded bg-yellow-600 py-2 text-white hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500/80 focus:ring-offset-2"
            >
              <div
                class="mr-4 h-[10px] w-[10px] animate-ping rounded-full bg-white"
                v-show="isLoading"
              ></div>
              <span class="tracking-wider" v-if="!isLoading">管理員登入</span>
              <span class="tracking-wider" v-else>登入中</span>
            </button>
            <p class="font-thin text-stone-400">© 2022 - Kado kado</p>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginApi } from '@/api/axios';

export default {
  setup() {
    const router = useRouter();

    const emailStr = ref('');
    const passwordStr = ref('');

    const isLoading = ref(false);
    const isDisabled = ref(false);

    const showAlert = ref(false);
    const alertObj = ref({});

    const login = () => {
      isLoading.value = true;
      // 讓 input 變成 disabled 避免當讀取遠端資料時重複輸入值
      isDisabled.value = true;

      const userData = {
        username: emailStr.value,
        password: passwordStr.value,
      };
      loginApi(userData)
        .then((res) => {
          showAlert.value = true;
          alertObj.value = {
            msg: '登入成功，即將跳轉至管理頁面！',
            state: 'success',
            showButton: false,
          };

          isLoading.value = false;

          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;

          // 1.5 秒後跳轉
          setTimeout(() => {
            router.push('/dashboard');
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          showAlert.value = true;
          alertObj.value = {
            msg: '登入失敗，請確認帳號密碼是否存在！',
            state: 'warning',
            showButton: false,
          };

          isDisabled.value = false;
          isLoading.value = false;
        });
    };

    return {
      emailStr,
      passwordStr,
      isLoading,
      isDisabled,
      showAlert,
      alertObj,
      login,
    };
  },
};
</script>
