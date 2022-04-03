<template>
  <div
    class="item-center relative mt-4 flex w-full justify-center overflow-hidden rounded bg-transparent"
  >
    <span
      v-if="imageUrl === 'https://fakeimg.pl/1000x1000/?text=Image' ? false : true"
      class="absolute right-2 top-2 cursor-pointer rounded-full bg-white/50 p-1 text-stone-600/50 hover:bg-white hover:text-red-600"
      title="刪除這張圖片"
      @click="deleteImage(imageUrl)"
    >
      <heroicons-solid-x />
    </span>
    <img class="object-cover object-center" :src="imageUrl" />
  </div>
  <div class="mb-2 overflow-x-auto">
    <span class="whitespace-nowrap text-sm text-stone-500" v-if="imageUrl">
      圖片網址：
      <br />
      {{ imageUrl === 'https://fakeimg.pl/1000x1000/?text=Image' ? '' : imageUrl }}
    </span>
  </div>
  <!-- 上傳圖片 -->
  <div class="relative mb-1">
    <input
      type="file"
      class="input-style-file"
      @change="uploadImage($event)"
      id="productUpload"
      name="file-to-upload"
      :class="{ 'file:invisible': isUploading }"
    />
    <button
      type="button"
      class="absolute left-0 top-[6px] animate-pulse rounded-full bg-stone-700 px-4 py-2 text-sm text-white"
      :class="{ invisible: !isUploading }"
      disabled
    >上傳中 ...</button>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue';
import axios from 'axios';

export default {
  emits: {
    'emit-image': (imgUrl) => {
      return typeof imgUrl === 'string';
    },
    'delete-image': (imgUrl) => {
      return typeof imgUrl === 'string';
    }
  },
  props: {
    'temp-product-image': String,
  },
  setup(props, { emit }) {
    const imageUrl = ref('https://fakeimg.pl/1000x1000/?text=Image');
    const inputTextImageUrl = ref('');
    const isUploading = ref(false);

    const uploadImage = (e) => {
      isUploading.value = true;
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);

      const url = `${import.meta.env.VITE_API_URL}/api/${import.meta.env.VITE_API_PATH}/admin/upload`;

      axios
        .post(url, formData)
        .then((res) => {
          imageUrl.value = res.data.imageUrl;
          isUploading.value = false;
          emit('emit-image', res.data.imageUrl);
        })
        .catch((err) => {
          console.dir(err);
          isUploading.value = true;
        });
    };

    const deleteImage = (imageUrl) => {
      emit('delete-image', imageUrl);
    };

    nextTick(() => {
      if (props.tempProductImage !== '') {
        imageUrl.value = props.tempProductImage;
      }
    });

    return {
      imageUrl,
      isUploading,
      inputTextImageUrl,

      uploadImage,
      deleteImage,
    };
  },
};
</script>
