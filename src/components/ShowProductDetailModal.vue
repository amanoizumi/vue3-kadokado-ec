<template>
  <div
    class="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-40 py-20 px-5 sm:px-20"
    @click.self="close"
  >
    <div class="m-auto max-h-full max-w-3xl overflow-y-auto rounded-sm bg-gray-50 p-5 opacity-100">
      <!-- 標題 -->
      <div class="mb-7 flex items-center justify-between border-b pb-3">
        <h3 class="text-xl font-bold text-gray-800">{{ tempData.title }}</h3>
        <button type="button" @click="close">
          <heroicons-solid-x class="text-xl text-stone-600 hover:text-green-700"></heroicons-solid-x>
        </button>
      </div>

      <!-- 內容 -->
      <div class="mb-8 flex flex-col sm:flex-row">
        <div class="relative overflow-hidden rounded sm:w-3/4">
          <span class="absolute left-0 bg-sky-600 px-3 py-2 text-white">{{ tempData.category }}</span>
          <img class="object-cover" :src="tempData.imageUrl" title="產品圖片" alt="產品圖片" />
        </div>

        <div class="flex w-1/2 flex-col py-2 sm:px-4">
          <h4 class="mr-2 text-lg font-bold text-gray-800">產品描述</h4>
          <p class="mb-5 border border-transparent text-gray-700">{{ tempData.description }}</p>

          <h4 class="text-lg font-bold text-gray-800">產品內容</h4>
          <p class="mb-5 text-gray-700">{{ tempData.content }}</p>
          <p>
            {{ tempData.price }}
            <span class="text-gray-500 line-through">{{ tempData.origin_price }}</span>
            / 元
          </p>
        </div>
      </div>
      <ul class="mb-4 flex flex-col sm:mb-4 sm:-mr-3 sm:flex-row">
        <li
          v-for="imgUrl in tempData.imagesUrl"
          :key="imgUrl"
          class="mb-5 overflow-hidden rounded-lg sm:mb-0 sm:mr-3 sm:rounded"
        >
          <img :src="imgUrl" class="object-cover sm:h-32" title="產品圖片" alt="產品圖片" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  props: {
    'prop-data': Object,
  },
  emits: ['close-modal'],

  setup(props, { emit }) {
    const tempData = ref({});

    onMounted(() => {
      tempData.value = props.propData;
    });

    const close = () => {
      emit('close-modal');
    };

    return {
      tempData,
      close,
    };
  },
};
</script>
