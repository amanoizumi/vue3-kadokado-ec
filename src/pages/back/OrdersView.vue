<template>
  <PageIsLoading v-show="isLoading"></PageIsLoading>
  <DashboardTopArea v-show="!isLoading" :page-title="'訂單列表頁面TOP'" />
  <div class="px-2 pt-10 sm:pt-20 lg:px-8">
    <div class="overflow-x-auto">
      <table class="shadow table rounded-md lg:w-full w-[800px]">
        <thead class="border-b">
          <tr class="bg-stone-200 text-left text-lg text-stone-900/60">
            <th class="w-2/12 py-2 px-6">訂單編號</th>
            <th class="w-2/12 px-2">訂單日期</th>
            <th class="w-2/12 px-2">訂單狀態</th>
            <th class="w-2/12 px-2"></th>
          </tr>
        </thead>
        <tbody class="bg-stone-50">
          <tr
            class="border-b text-stone-800 hover:bg-stone-100"
            v-for="order in ordersArr"
            :key="order.id"
          >
            <td class="px-6 py-2">{{ order.id }}</td>
            <td class="px-2 py-2">{{ order.create_at }}</td>
            <td class="px-2 py-2">
              <span
                type="button"
                class="font-medium"
                :class="{
                  'text-green-700': order.is_paid,
                  'text-red-700': !order.is_paid,
                }"
              >{{ order.is_paid ? '已付款' : '未付款' }}</span>
            </td>
            <td class="px-2 py-2">
              <div class="mr-3 flex items-center">
                <button
                  type="button"
                  class="mr-5 text-stone-700 hover:scale-125 hover:text-sky-600"
                  @click="showOrderDetail(order)"
                >
                  <heroicons-outline-eye class="h-6 w-6" />
                </button>
                <button
                  type="button"
                  class="mr-10 text-stone-700 hover:scale-125 hover:text-yellow-500"
                  @click="editOrder(order)"
                >
                  <heroicons-outline-pencil class="h-6 w-6" />
                </button>
                <button
                  type="button"
                  class="text-stone-700 hover:scale-110 hover:text-red-600"
                  @click="checkDelete(order)"
                >
                  <heroicons-outline-trash class="h-6 w-6" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex">
      <Pagination
        class="ml-auto mt-6"
        :view="'order'"
        :data="ordersObj"
        :current-page-num="currentPage"
        @change-page="changePage"
      ></Pagination>
    </div>
  </div>
  <EditOrder
    v-if="showEditOrderArea"
    :prop-order="tempOrder"
    @hide-edit-order-area="hideOrderEdit"
    @init-orders="getBackOrders"
  />
</template>
<script>
import { ref, onMounted } from 'vue';
import { getBackOrdersApi } from '@/api/axios';
import { deleteBackOrderApi } from '@/api/axios';
import emitter from '@/services/emitter';

export default {
  setup() {
    const ordersObj = ref({});
    const ordersArr = ref([]);

    const currentPage = ref(1);

    const tempOrder = ref({});

    const showEditOrderArea = ref(false)
    const isLoading = ref(false);

    const getBackOrders = (page = currentPage.value) => {
      isLoading.value = true;
      getBackOrdersApi(page)
        .then((res) => {
          isLoading.value = false;
          ordersArr.value = res.data.orders;
          currentPage.value = res.data.pagination.current_page;
          ordersObj.value = res.data;
        })
        .catch((err) => {
          isLoading.value = false;
          console.log(err);
        });
    };

    const changePage = (num) => {
      getBackOrders(num);
    };

    const checkDelete = (order) => {
      tempOrder.value = order;
      emitter.emit('alert-data', {
        msg: `確定要刪除訂單【 ${order.id} 】嗎？`,
        state: 'danger',
        showButton: true,
        target: 'order',
      });
    };

    const deleteOrder = (result) => {
      if (!result) {
        emitter.emit('clear-alert');
        tempOrder.value = {};
      } else {
        isLoading.value = true;
        const { id } = tempOrder.value;

        deleteBackOrderApi(id)
          .then((res) => {
            emitter.emit('alert-data', {
              msg: res.data.message,
              state: 'success',
              showButton: false,
            });

            tempOrder.value = {};
            getBackOrders();

            setTimeout(() => {
              emitter.emit('clear-alert');
            }, 1500);
            isLoading.value = false;
          })
          .catch((err) => {
            console.dir(err);
            tempOrder.value = {};
            isLoading.value = false;
          });
      }
    };

    const showOrderDetail = (id) => {
      console.log(id);
    }
    const editOrder = (order) => {
      tempOrder.value = order;
      showEditOrderArea.value = true;
    }
    const hideOrderEdit = () => {
      showEditOrderArea.value = false;
    };

    onMounted(() => {
      getBackOrders();
      emitter.on('delete-order-result', deleteOrder);
    });
    return {
      isLoading,
      ordersArr,
      ordersObj,
      currentPage,
      showEditOrderArea,
      tempOrder,
      getBackOrders,
      hideOrderEdit,
      changePage,
      editOrder,
      checkDelete,
      showOrderDetail
    };
  },
};
</script>
