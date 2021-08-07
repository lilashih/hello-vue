<template>
  <div class="hidden" />
</template>

<script>
export default {
  created() {
    const component = this;
    this.handler = function (e) {
      component.$emit('keyup', e);
    };
    window.addEventListener('keyup', this.handler);
  },
  beforeUnmount() {
    window.removeEventListener('keyup', this.handler);
  },
};
</script>