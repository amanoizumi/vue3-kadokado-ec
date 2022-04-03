<template>
  <teleport to="title"> - {{ title }} </teleport>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
