<template>
  <div
    class="absolute top-0 z-20 flex w-full items-center justify-center border-b-2 p-3 tracking-wide"
    :class="{
      'border-emerald-300': state === 'success',
      'text-emerald-600': state === 'success',
      'bg-emerald-100': state === 'success',
    
      'border-orange-100': state === 'warning',
      'text-orange-600': state === 'warning',
      'bg-orange-50': state === 'warning',
    
      'border-red-100': state === 'danger',
      'text-red-600': state === 'danger',
      'bg-red-50': state === 'danger',
    }"
  >
    {{ msg }}
    <div v-if="showButton">
      <button
        type="button"
        @click="emitResult(target, true)"
        class="ml-5 mr-5 rounded bg-indigo-500 px-3 py-1 text-sm text-white hover:bg-indigo-700"
      >確定</button>
      <button
        type="button"
        @click="emitResult(target, false)"
        class="rounded bg-slate-300 px-3 py-1 text-sm text-black hover:bg-slate-400 hover:text-white"
      >取消</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import emitter from "@/services/emitter";

export default {
  emits: {
    'emit-button-result': (result) => {
      return typeof result === 'boolean';
    }
  },
  props: {
    propAlertObj: Object,
  },
  setup(props, { emit }) {
    const msg = ref('');
    const state = ref('');
    const showButton = ref(false);
    const target = ref('');

    const emitResult = (target, result) => {
      emitter.emit(`delete-${target}-result`, result);
    };

    onMounted(() => {
      msg.value = props.propAlertObj.msg;
      state.value = props.propAlertObj.state;
      showButton.value = props.propAlertObj.showButton;
      target.value = props.propAlertObj.target;
    })

    return {
      msg,
      state,
      showButton,
      target,
      emitResult
    };
  },
};
</script>
