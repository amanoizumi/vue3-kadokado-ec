<template>
  <div
    class="hidden h-10 w-full items-center bg-stone-200 pl-10 text-stone-900 sm:fixed sm:flex"
  >{{ pageTitle }}</div>
</template>

<script>
export default {
  props: {
    pageTitle: String,
  },
};
</script>
