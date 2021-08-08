<template>
  <div />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  watch: {
    title: {
      handler() {
        document.title = this.title;
      },
      immediate: true,
    },
  },
};
</script>