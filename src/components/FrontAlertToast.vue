<template>
  <div class="fixed inset-0 z-30" :class="{ 'bg-black/20': backdrop }">
    <div class="relative">
      <div
        class="mt-[124px] lg:mt-20 items-center overflow-y-auto rounded-sm p-5 opacity-100 border-b-2 z-50"
        :class="{
          'border-emerald-300': state === 'success',
          'text-emerald-600': state === 'success',
          'bg-emerald-100/90': state === 'success',
        
          'border-orange-300': state === 'warning',
          'text-orange-600': state === 'warning',
          'bg-orange-100/90': state === 'warning',
        
          'border-red-300': state === 'danger',
          'text-red-600': state === 'danger',
          'bg-red-100/90': state === 'danger',
        }"
      >
        <div class="flex">
          <div class="text-center text-lg flex items-center mx-auto">
            {{ msg }}
            <heroicons-outline-check-circle v-if="state === 'success'" class="ml-2 mt-[2px]" />
            <heroicons-outline-exclamation v-else="state === 'warning'" class="ml-2 mt-[2px]" />

            <div v-if="showButton">
              <button
                type="button"
                @click="emitResult(true)"
                class="ml-5 mr-5 rounded bg-indigo-500 px-3 py-1 text-sm text-white hover:bg-indigo-700"
              >確定</button>
              <button
                type="button"
                @click="emitResult(false)"
                class="rounded bg-slate-300 px-3 py-1 text-sm text-black hover:bg-slate-400 hover:text-white"
              >取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import emitter from '@/services/emitter';
import { useRoute } from 'vue-router';

export default {
  props: {
    propAlertObj: Object,
  },
  setup(props, { emit }) {
    const route = useRoute();
    const path = ref('');
    const msg = ref('');
    const state = ref('');
    const showButton = ref(false);
    const backdrop = ref(false);

    const emitResult = (result) => {
      emitter.emit('front-alert-result', result);
    };

    onMounted(() => {
      msg.value = props.propAlertObj.msg;
      showButton.value = props.propAlertObj.showButton;
      state.value = props.propAlertObj.state;
      backdrop.value = props.propAlertObj.backdrop;
      path.value = route.path;
      watch(
        () => route.path,
        (n, o) => {
          path.value = route.path;
          if (n !== o) {
            emitter.emit('close-front-alert');
          }
        }
      );

    });
    return {
      msg,
      showButton,
      state,
      backdrop,
      emitResult,
    };
  },
};
</script>
