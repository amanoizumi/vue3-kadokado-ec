<template>
  <PageIsLoading v-show="isLoading"></PageIsLoading>
  <DashboardTopArea v-show="!isLoading" :page-title="'產品列表頁面TOP'" />
  <div class="px-2 pt-10 sm:pt-20 lg:px-8">
    <div class="overflow-x-auto">
      <table class="shadow table rounded-md lg:w-full w-[800px]">
        <thead class="border-b">
          <tr class="bg-stone-200 text-left text-lg text-stone-900/60">
            <th class="w-3/12 py-2 px-6">產品名稱</th>
            <th class="w-2/12 px-2">原價</th>
            <th class="w-2/12 px-2">售價</th>
            <th class="w-2/12 px-2">啟用狀態</th>
            <th class="w-3/12 px-2"></th>
          </tr>
        </thead>
        <tbody class="bg-stone-50">
          <tr
            class="border-b text-stone-800 hover:bg-stone-100"
            v-for="product in products"
            :key="product.id"
          >
            <td class="px-6 py-2">{{ product.title }}</td>
            <td class="px-2 py-2">{{ toThousands(product.origin_price) }}</td>
            <td class="px-2 py-2">{{ toThousands(product.price) }}</td>
            <td class="px-2 py-2">
              <span
                type="button"
                class="font-medium"
                :class="{
                  'text-green-700': product.is_enabled,
                  'text-red-700': !product.is_enabled,
                }"
              >{{ product.is_enabled ? '啟用' : '未啟用' }}</span>
            </td>
            <td class="px-2 py-2">
              <div class="mr-3 flex items-center">
                <button
                  type="button"
                  class="mr-5 text-stone-700 hover:scale-125 hover:text-sky-600"
                  @click="showProductDetail(product)"
                >
                  <heroicons-outline-eye class="h-6 w-6" />
                </button>
                <button
                  type="button"
                  class="mr-10 text-stone-700 hover:scale-125 hover:text-yellow-500"
                  @click="editProduct(product)"
                >
                  <heroicons-outline-pencil class="h-6 w-6" />
                </button>
                <button
                  type="button"
                  class="text-stone-700 hover:scale-110 hover:text-red-600"
                  @click="checkDelete(product)"
                >
                  <heroicons-outline-trash class="h-6 w-6" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <ShowProductDetailModal v-if="showModal" :prop-data="tempProduct" @close-modal="closeModal" />

    <div class="mt-6 flex justify-between">
      <button type="button" class="main-button mr-18 flex items-center" @click="addProduct">
        新增產品
        <heroicons-solid-plus class="ml-1 mt-[1px] h-5 w-5" />
      </button>
      <Pagination
        :view="'product'"
        :data="allProductsArr"
        :current-page-num="currentPage"
        @change-page="changePage"
      ></Pagination>
    </div>
  </div>
  <AddEditProduct
    v-if="showAddEditArea"
    :prop-is-edit="isEdit"
    :prop-product="tempProduct"
    @hide-add-edit-area="hideAddEit"
    @init-products="getBackProducts"
  />
</template>

<script>
import { ref, onMounted } from 'vue';
import { getBackProductsApi } from '@/api/axios';
import { deleteBackProductApi } from '@/api/axios';
import emitter from '@/services/emitter';
import toThousands from '@/utils/toThousands';

export default {
  setup() {
    const allProductsArr = ref([]);
    const products = ref([]);
    const currentPage = ref(1);

    const tempProduct = ref({});

    const showAddEditArea = ref(false);
    const showModal = ref(false);

    const isLoading = ref(true);
    const isEdit = ref(false);
    // 一頁有幾筆
    const perPage = 10;

    const getBackProducts = () => {
      isLoading.value = true;
      getBackProductsApi()
        .then((res) => {
          isLoading.value = false;
          const allProducts = Object.values(res.data.products).reverse();
          // 分組
          allProductsArr.value = createPagination(allProducts, 10);
          changePage(currentPage.value);
        })
        .catch((err) => {
          console.log(err);
          isLoading.value = false;
        });
    };

    const changePage = (num) => {
      products.value = allProductsArr.value[num - 1];
      currentPage.value = num;
    };

    const createPagination = (arr = [], idx = perPage) => {
      const newArr = [];
      for (let i = 0; i < arr.length; i += idx) {
        newArr.push(arr.slice(i, i + idx));
      }
      return newArr;
    };

    const showProductDetail = (product) => {
      showModal.value = true;
      tempProduct.value = product;
    };

    const addProduct = () => {
      showAddEditArea.value = true;
      isEdit.value = false;
    };

    const checkDelete = (product) => {
      tempProduct.value = product;
      emitter.emit('alert-data', {
        msg: `確定要刪除產品【 ${product.title} 】嗎？`,
        state: 'danger',
        showButton: true,
        target: 'product'
      });
    };

    const deleteProduct = (result) => {
      if (!result) {
        emitter.emit('clear-alert');
        tempProduct.value = {};
      } else {
        isLoading.value = true;
        const { id } = tempProduct.value;

        deleteBackProductApi(id)
          .then((res) => {
            emitter.emit('alert-data', {
              msg: res.data.message,
              state: 'success',
              showButton: false,
            });

            tempProduct.value = {};
            // 取得產品資料刷新畫面
            getBackProducts();

            setTimeout(() => {
              emitter.emit('clear-alert');
            }, 1500);
            isLoading.value = false;
          })
          .catch((err) => {
            console.dir(err);
            tempProduct.value = {};
            isLoading.value = false;
          });
      }
    };

    const editProduct = (product) => {
      showAddEditArea.value = true;
      isEdit.value = true;
      tempProduct.value = product;
    };

    const closeModal = () => {
      showModal.value = false;
    };
    const hideAddEit = () => {
      showAddEditArea.value = false;
    };

    onMounted(() => {
      getBackProducts();
      emitter.on('delete-product-result', deleteProduct);
    });

    return {
      products,
      isLoading,
      isEdit,
      showModal,
      tempProduct,
      showAddEditArea,
      allProductsArr,
      currentPage,
      closeModal,
      toThousands,
      showProductDetail,
      hideAddEit,
      getBackProducts,
      deleteProduct,
      addProduct,
      editProduct,
      checkDelete,
      changePage,
    };
  },
};
</script>
