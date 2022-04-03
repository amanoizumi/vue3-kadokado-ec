<template>
  <div
    class="absolute w-screen h-screen z-10 flex animate-pulse items-center justify-center bg-stone-700 bg-opacity-30 sm:px-20"
    :class="{ '-mt-10': isFront }"
  >
    <div class="flex animate-bounce">
      <div class="mr-8 h-[20px] w-[20px] rounded-full bg-yellow-600 shadow-lg"></div>
      <div class="mr-8 h-[20px] w-[20px] rounded-full bg-yellow-700 shadow-lg"></div>
      <div class="h-[20px] w-[20px] rounded-full bg-yellow-800 shadow-lg"></div>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import emitter from '@/services/emitter';

export default {
  setup() {
    const route = useRoute();
    const isFront = ref(false);
    if (route.path.split('/')[1] !== 'dashboard') {
      isFront.value = true;
    }
    return {
      isFront
    };
  },
};
</script>
