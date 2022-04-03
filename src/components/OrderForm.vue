<template>
  <h2 class="mb-8 text-center text-2xl text-stone-700">訂購人資料</h2>
  <Form @submit="submitOrder" class="mx-auto max-w-[700px] px-2 text-base lg:px-0" id="kadoForm">
    <div class="mb-4 grid gap-x-2 md:mb-0 md:grid-cols-2">
      <div class="mb-4">
        <label for="kadoName" class="mb-2 flex items-center">
          姓名
          <ErrorMessage name="姓名" class="ml-2 text-sm text-red-600"></ErrorMessage>
        </label>

        <Field
          type="text"
          id="kadoName"
          class="w-full rounded focus:border-yellow-600 focus:bg-white focus:ring focus:ring-yellow-600 focus:ring-opacity-30"
          name="姓名"
          placeholder="請輸入姓名"
          v-model.trim="tempOrder.orderName"
          rules="required"
        ></Field>
      </div>
      <div>
        <label for="kadoPhone" class="mb-2 flex items-center">
          電話
          <ErrorMessage name="電話" class="ml-2 text-sm text-red-600"></ErrorMessage>
        </label>
        <Field
          type="tel"
          id="kadoPhone"
          class="w-full rounded focus:border-yellow-600 focus:bg-white focus:ring focus:ring-yellow-600 focus:ring-opacity-30"
          name="電話"
          placeholder="請輸入電話"
          v-model.trim="tempOrder.orderPhone"
          :rules="isPhone"
        ></Field>
      </div>
    </div>
    <div class="mb-4">
      <label for="kadoAddress" class="mb-2 flex items-center">
        地址
        <ErrorMessage name="地址" class="ml-2 text-sm text-red-600"></ErrorMessage>
      </label>
      <Field
        type="text"
        id="kadoAddress"
        class="w-full rounded focus:border-yellow-600 focus:bg-white focus:ring focus:ring-yellow-600 focus:ring-opacity-30"
        name="地址"
        placeholder="請輸入地址"
        v-model.trim="tempOrder.orderAddress"
        rules="required"
      ></Field>
    </div>
    <div class="mb-4">
      <label for="kadoEmail" class="mb-2 flex items-center">
        電子信箱
        <ErrorMessage name="電子信箱" class="ml-2 text-sm text-red-600"></ErrorMessage>
      </label>
      <Field
        type="email"
        id="kadoEmail"
        class="w-full rounded focus:border-yellow-600 focus:bg-white focus:ring focus:ring-yellow-600 focus:ring-opacity-30"
        name="電子信箱"
        placeholder="請輸入電子信箱"
        v-model.trim="tempOrder.orderEmail"
        rules="required|email"
      ></Field>
    </div>
    <div class="mb-10">
      <label for="kadoComment" class="mb-2 block">留言（非必填）</label>
      <Field
        type="text"
        class="w-full rounded focus:border-yellow-600 focus:bg-white focus:ring focus:ring-yellow-600 focus:ring-opacity-30"
        name="留言"
        id="kadoComment"
        placeholder="歡迎讓我們知道您的寶貴意見！:)"
        v-model.trim="tempOrder.orderComment"
      ></Field>
    </div>
    <div class="flex">
      <button
        type="submit"
        id="submitBtn"
        class="mx-auto w-1/5 rounded bg-stone-800 py-2 text-white hover:bg-yellow-800"
        :class="{ 'bg-yellow-800/50': isSubmit }"
        :disabled="isSubmit"
      >
        <span v-if="!isSubmit">送出</span>
        <span v-else>送出訂單中...</span>
      </button>
    </div>
  </Form>
</template>

<script>
import { ref } from 'vue';
import { postFrontOrderApi } from '@/api/axios';
import { useRouter } from 'vue-router';
import emitter from '@/services/emitter';

export default {
  setup(props, { emit }) {
    const router = useRouter();
    const isSubmit = ref(false);

    const isPhone = () => {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(tempOrder.value.orderPhone) ? true : '需為手機號碼格式，例如 0912345678'
    }

    const tempOrder = ref({
      orderName: '',
      orderPhone: '',
      orderAddress: '',
      orderEmail: '',
      orderComment: '',
    });

    const submitOrder = () => {
      isSubmit.value = true;
      const obj = {
        data: {
          user: {
            name: tempOrder.value.orderName,
            email: tempOrder.value.orderEmail,
            tel: tempOrder.value.orderPhone,
            address: tempOrder.value.orderAddress,
          },
          message: tempOrder.value.orderComment,
        },
      };

      postFrontOrderApi(obj).then((res) => {
        isSubmit.value = false;
        emitter.emit('update-cartlen');
        emitter.emit('open-front-alert', {
          msg: res.data.message,
          showButton: false,
          state: 'success'
        })

        const { orderId } = res.data;

        setTimeout(() => {
          emitter.emit('close-front-alert');
          router.push(`/order/${orderId}`)
        }, 1500);

      }).catch((err) => {
        isSubmit.value = false;
        console.dir(err);
      })
    };

    return {
      tempOrder,
      isSubmit,
      isPhone,
      submitOrder,
    };
  },
};
</script>
