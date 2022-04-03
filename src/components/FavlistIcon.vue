<template>
  <div>
    <heroicons-solid-heart v-if="heartSwitch === true" @click.stop="favlistHandler"></heroicons-solid-heart>
    <heroicons-outline-heart v-else @click.stop="favlistHandler"></heroicons-outline-heart>
  </div>
</template>

<script>
import HeroiconsSolidHeart from '~icons/heroicons-solid/heart';
import HeroiconsOutlineHeart from '~icons/heroicons-outline/heart';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorageFn';

import { ref, onMounted, watch } from 'vue';
import emitter from '@/services/emitter';

export default {
  components: {
    HeroiconsSolidHeart,
    HeroiconsOutlineHeart,
  },
  props: {
    propId: String,
    'prop-favlist-local': Object,
  },

  setup(props, { emit }) {
    const id = ref('');
    // watch 需要是響應式物件
    const favlistData = ref({});
    const heartSwitch = ref(false);

    const favlistHandler = () => {
      // 檢查 localStorage 有沒有該商品 id
      const result = favlistData.value.favlistData.indexOf(id.value);

      if (result === -1) {
        addToFavlist();
        heartSwitch.value = true;
      } else {
        removeFavlistItem();
        heartSwitch.value = false;
      }
    };

    const addToFavlist = () => {
      favlistData.value.favlistData.push(id.value);
      setLocalStorage('favlistLocalStorage', favlistData.value);
      emitter.emit('open-front-alert', {
        msg: '已加入商品到我的最愛',
        showButton: false,
        state: 'success',
      });
      setTimeout(() => {
        emitter.emit('close-front-alert');
      }, 1000);
    };

    const removeFavlistItem = () => {
      const idx = favlistData.value.favlistData.indexOf(id.value);
      favlistData.value.favlistData.splice(idx, 1);
      setLocalStorage('favlistLocalStorage', favlistData.value);
      emitter.emit('open-front-alert', {
        msg: '已將商品從我的最愛移除',
        showButton: false,
        state: 'warning',
      });
      setTimeout(() => {
        emitter.emit('close-front-alert');
      }, 1000);
    };

    onMounted(() => {
      id.value = props.propId;
      favlistData.value = props.propFavlistLocal;

      const result = favlistData.value.favlistData.indexOf(id.value);

      if (result === -1) {
        heartSwitch.value = false;
      } else {
        heartSwitch.value = true;
      }
    });

    return {
      heartSwitch,
      addToFavlist,
      favlistHandler,
    };
  },
};
</script>
