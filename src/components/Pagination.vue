<template>
  <nav aria-label="分頁">
    <ul class="flex">
      <li class="mx-1">
        <button
          type="button"
          @click="emitChangePage(currentPage - 1)"
          :disabled="!hasPre"
          class="cursor-pointer px-3 py-1 text-neutral-700"
          :class="{
            'text-gray-300': !hasPre,
            'cursor-not-allowed': !hasPre,
            'hover:text-sky-500': hasPre,
          }"
          aria-label="往前一頁"
        >
          <span aria-hidden="true">上一頁</span>
        </button>
      </li>
      <li v-for="pageNum in totalPages" :key="pageNum" class="mx-1">
        <button
          type="button"
          @click="emitChangePage(pageNum)"
          :disabled="pageNum === currentPage"
          class="rounded-lg px-4 py-1"
          :class="{
            'bg-sky-500': pageNum === currentPage,
            'text-white': pageNum === currentPage,
            'hover:bg-sky-700': pageNum === currentPage,
            'hover:bg-slate-200': pageNum !== currentPage,
          }"
        >{{ pageNum }}</button>
      </li>
      <li class="mx-1">
        <button
          type="button"
          @click="emitChangePage(currentPage + 1)"
          :disabled="!hasNext"
          class="cursor-pointer px-3 py-1 text-neutral-700"
          :class="{
            'text-gray-300': !hasNext,
            'cursor-not-allowed': !hasNext,
            'hover:text-sky-500': hasNext,
          }"
          aria-label="往後一頁"
        >
          <span aria-hidden="true">下一頁</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  emits: {
    'change-page': (num) => {
      return typeof num === 'number';
    }
  },
  props: {
    'data': [Array, Object],
    'current-page-num': Number,
    'view': String
  },
  setup(props, { emit }) {
    const currentPage = ref(0);
    const hasNext = ref(false);
    const hasPre = ref(false);
    const totalPages = ref(0);

    watchEffect(() => {
      if (props.view === 'product') {
        totalPages.value = props.data.length;
      }

      else if (props.view === 'order') {
        totalPages.value = props.data.pagination?.total_pages;
      }

      currentPage.value = props.currentPageNum;

      // 防止出現範圍外的頁數
      if (currentPage.value < 1) currentPage.value = 1;
      if (currentPage.value > totalPages.value) currentPage.value = totalPages.value;

      // 調整上一頁、下一頁的 disabled 狀態
      if (currentPage.value === 1) {
        hasPre.value = false;
      } else {
        hasPre.value = true;
      };

      if (totalPages.value === currentPage.value) {
        hasNext.value = false;
      } else {
        hasNext.value = true;
      }
    });

    const emitChangePage = (num) => {
      emit('change-page', num);
    }

    return {
      currentPage,
      hasNext,
      hasPre,
      totalPages,

      emitChangePage,
    };
  },
};
</script>
