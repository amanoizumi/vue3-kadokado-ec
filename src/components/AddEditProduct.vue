<template>
  <div
    class="absolute top-0 left-0 right-0 z-10 min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200"
  >
    <!-- 內層容器 -->
    <div class="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-10">
      <!-- 標題 -->
      <div class="flex justify-between border-b pt-5 pb-[10px]">
        <h2 class="mb-1 text-xl font-medium text-green-800">
          <span v-if="isEdit">編輯產品</span>
          <span v-else>新增產品</span>
        </h2>
        <div>
          <button type="button" title="清空資料(初始化)" @click="resetData" class="mr-5">
            <heroicons-outline-refresh class="text-xl text-stone-600 hover:text-green-600" />
          </button>
          <button type="button" title="取消" @click="close">
            <heroicons-solid-x class="text-xl text-stone-600 hover:text-red-600" />
          </button>
        </div>
      </div>
      <!-- 產品內容 -->
      <div class="mt-8 grid grid-cols-1 sm:gap-x-8 lg:grid-cols-2">
        <div class="order-2 max-h-[calc(100vh-95px)] overflow-y-auto px-2 lg:order-1">
          <p class="mb-3 font-medium tracking-wide text-stone-600">
            主要圖片
            <span class="ml-1 text-sm text-stone-500">Main Image</span>
          </p>
          <UploadImage
            :temp-product-image="tempProduct.imageUrl"
            :key="UploadImageKey"
            @delete-image="deleteImage"
            @emit-image="emitMainImage"
          />

          <template v-if="tempProduct?.imagesUrl?.length">
            <p class="mb-3 mt-5 font-medium tracking-wide text-stone-600">
              其他圖片
              <span class="ml-1 text-sm text-stone-500">Main Image</span>
            </p>
            <div>
              <UploadImage
                @delete-image="deleteImage"
                @emit-image="emitImage"
                v-for="(item, idx) in tempProduct.imagesUrl"
                :temp-product-image="item"
                :key="UploadImageKey + `${idx}`"
              />
            </div>
          </template>

          <button
            type="button"
            class="mt-1 mb-5 text-stone-500 hover:text-stone-800"
            @click="addOtherImage"
          >
            <span class="flex">
              新增其他圖片
              <heroicons-outline-plus class="mt-1 ml-1" />
            </span>
          </button>
        </div>

        <Form @submit="submitProduct" class="order-1 lg:order-2">
          <label for="productTitle">
            <p class="font-medium tracking-wide text-stone-600">
              標題
              <span class="ml-1 text-sm text-stone-500">Title</span>
              <ErrorMessage name="產品標題" class="ml-2 text-sm text-red-600"></ErrorMessage>
            </p>
            <Field
              type="text"
              id="productTitle"
              class="input-style"
              placeholder="請輸入產品標題"
              name="產品標題"
              v-model.trim="tempProduct.title"
              rules="required"
            ></Field>
          </label>
          <label for="productCategory">
            <p class="font-medium tracking-wide text-stone-600">
              類別
              <span class="ml-1 text-sm text-stone-500">Category</span>
              <ErrorMessage name="產品類別" class="ml-2 text-sm text-red-600"></ErrorMessage>
            </p>
            <Field
              type="text"
              id="productCategory"
              class="input-style"
              placeholder="請輸入產品類別"
              name="產品類別"
              v-model.trim="tempProduct.category"
              rules="required"
            ></Field>
          </label>
          <label for="productUnit">
            <p class="font-medium tracking-wide text-stone-600">
              單位
              <span class="ml-1 text-sm text-stone-500">Unit</span>
              <ErrorMessage name="產品單位" class="ml-2 text-sm text-red-600"></ErrorMessage>
            </p>
            <Field
              type="text"
              id="productUnit"
              class="input-style"
              placeholder="請輸入產品單位"
              name="產品單位"
              v-model="tempProduct.unit"
              rules="required"
            ></Field>
          </label>

          <label for="countryOfOrigin">
            <p class="font-medium tracking-wide text-stone-600">
              原產地
              <span class="ml-1 text-sm text-stone-500">Category</span>
              <ErrorMessage name="原產地" class="ml-2 text-sm text-red-600"></ErrorMessage>
            </p>
            <Field
              type="text"
              id="countryOfOrigin"
              class="input-style"
              placeholder="請輸入產品原產地"
              name="原產地"
              v-model.trim="tempProduct.countryOfOrigin"
            ></Field>
          </label>

          <label for="productOriginPrice">
            <p class="font-medium tracking-wide text-stone-600">
              原價
              <span class="ml-1 text-sm text-stone-500">Origin Price</span>
              <ErrorMessage name="原價" class="ml-2 text-sm text-red-600"></ErrorMessage>
            </p>
            <Field
              type="number"
              id="productOriginPrice"
              class="input-style"
              name="原價"
              v-model.number="tempProduct.origin_price"
              rules="required|min_value:0|max_value:9999999"
            ></Field>
          </label>
          <label for="productPrice">
            <p class="font-medium tracking-wide text-stone-600">
              售價
              <span class="ml-1 text-sm text-stone-500">Price</span>
              <ErrorMessage name="售價" class="ml-2 text-sm text-red-600"></ErrorMessage>
            </p>
            <Field
              type="number"
              id="productPrice"
              class="input-style"
              name="售價"
              v-model.number="tempProduct.price"
              rules="required|min_value:0|max_value:9999999"
            ></Field>
          </label>

          <label for="productDescription">
            <p class="font-medium tracking-wide text-stone-600">
              產品描述
              <span class="ml-1 text-sm text-stone-500">Description</span>
            </p>
            <textarea
              class="input-style"
              id="productDescription"
              rows="3"
              name="產品描述"
              placeholder="請輸入產品描述"
              v-model.trim="tempProduct.description"
            ></textarea>
          </label>

          <label for="productContent">
            <p class="font-medium tracking-wide text-stone-600">
              產品內容
              <span class="ml-1 text-sm text-stone-500">Content</span>
            </p>
            <textarea
              class="input-style"
              id="productContent"
              rows="5"
              placeholder="請輸入產品內容"
              name="產品內容"
              v-model.trim="tempProduct.content"
            ></textarea>
          </label>
          <p class="font-medium tracking-wide text-stone-600">
            啟用狀態
            <span class="ml-1 text-sm text-stone-500">Enabled</span>
          </p>

          <div class="mb-3 flex py-3">
            <label for="enabled" class="mr-3 flex items-center">
              <input
                type="radio"
                class="mr-2 mt-[2px] border-2 border-gray-300 text-green-800 focus:border-gray-300 focus:ring-green-500"
                v-model="tempProduct.is_enabled"
                value="啟用"
                id="enabled"
              />
              <span>啟用</span>
            </label>
            <label for="notEnabled" class="flex items-center">
              <input
                type="radio"
                class="mr-2 mt-[2px] border-2 border-gray-300 text-green-800 focus:border-gray-300 focus:ring-green-500"
                v-model="tempProduct.is_enabled"
                value="未啟用"
                id="notEnabled"
              />
              <span>未啟用</span>
            </label>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="fixed bottom-10 right-10 ml-auto h-[44px] w-[142px] border border-teal-500 bg-stone-100 text-lg text-teal-500 shadow-md hover:bg-teal-500 hover:text-white"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">提交產品資料</span>
              <span v-else class="flex items-center justify-center">提交中 ...</span>
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { AddEditBackProductApi } from '@/api/axios';

import pull from 'lodash/pull';
import cloneDeep from 'lodash/cloneDeep';
export default {
  emits: ['hide-add-edit-area', 'init-products'],
  props: {
    'prop-product': Object,
    'prop-is-edit': Boolean,
  },
  setup(props, { emit }) {
    const showUploadImages = ref(false);
    const UploadImageKey = ref(0);
    const tempProduct = ref({});
    const isEdit = ref(props.propIsEdit);
    const isLoading = ref(false);

    const resetEnableRadio = () => {
      tempProduct.value.is_enabled = tempProduct.value.is_enabled === 1 ? '啟用' : '未啟用';
    };

    // 清空資料
    const resetData = () => {
      if (isEdit) {
        const { id } = tempProduct.value;
        tempProduct.value = {
          title: '',
          category: '',
          origin_price: 0,
          price: 0,
          unit: '',
          description: '',
          content: '',
          is_enabled: 1,
          imageUrl: '',
          imagesUrl: [],
          id,
        };
      } else {
        tempProduct.value = {
          title: '',
          category: '',
          origin_price: 0,
          price: 0,
          unit: '',
          description: '',
          content: '',
          is_enabled: 1,
          imageUrl: '',
          imagesUrl: [],
        };
      }
      // 利用 :key 的變更來強制刷新元件生命週期 (清空資料)
      UploadImageKey.value++;
      resetEnableRadio();
    };
    // 刪除圖片

    const deleteImage = (imageUrl) => {
      if (tempProduct.value.imageUrl === imageUrl) {
        tempProduct.value.imageUrl = '';
        UploadImageKey.value++;
        return;
      }
      tempProduct.value.imagesUrl.forEach((item, idx) => {
        if (item === imageUrl) {
          console.log(item, idx);
          tempProduct.value.imagesUrl.splice(idx, 1);
          // 刷新元件生命週期
          UploadImageKey.value++;
        }
      });
    };

    // 送出產品
    const submitProduct = () => {
      isLoading.value = true;
      pull(tempProduct.value.imagesUrl, '');

      const obj = {
        data: {
          ...tempProduct.value,
        },
      };

      if (obj.data.is_enabled === '啟用') {
        obj.data.is_enabled = 1;
      } else if (obj.data.is_enabled === '未啟用') {
        obj.data.is_enabled = 0;
      }

      AddEditBackProductApi(isEdit, obj, tempProduct)
        .then((res) => {
          emit('init-products');
          resetData();
          close();
          isLoading.value = false;
        })
        .catch((err) => {
          console.dir(err);
          isLoading.value = false;
        });
    };

    const addOtherImage = () => {
      if (tempProduct.value.hasOwnProperty('imagesUrl')) {
        tempProduct.value.imagesUrl.push('');
      } else {
        tempProduct.value.imagesUrl = [''];
      }
    };

    // 隱藏新增編輯區
    const close = () => {
      emit('hide-add-edit-area');
    };

    const emitImage = (imageUrl) => {
      // 把新增的圖加入到 tempProduct 的 imagesUrl 中
      tempProduct.value.imagesUrl.push(imageUrl);
      // 用 lodash 的 pull 方法移除掉陣列中所有空字串
      pull(tempProduct.value.imagesUrl, '');
    };

    const emitMainImage = (imageUrl) => {
      tempProduct.value.imageUrl = imageUrl;
    };

    onMounted(() => {
      if (props.propIsEdit === false) {
        tempProduct.value = {
          title: '',
          category: '',
          origin_price: 0,
          price: 0,
          unit: '',
          description: '',
          content: '',
          is_enabled: 1,
          imageUrl: '',
          imagesUrl: [],
        };
        resetEnableRadio();
      } else {
        tempProduct.value = cloneDeep(props.propProduct);
        resetEnableRadio();
      }
    });

    return {
      isLoading,
      isEdit,
      tempProduct,
      showUploadImages,
      UploadImageKey,

      close,
      resetData,
      emitImage,
      emitMainImage,
      submitProduct,
      deleteImage,
      addOtherImage,
    };
  },
};
</script>
