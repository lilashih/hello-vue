<template>
  <div class="relative flex justify-center m-auto mt-6">
    <div class="text-3xl">
      <slot />
    </div>
    <div class="absolute right-0 text-right">
      <a
        href="https://github.com/lilashih"
        target="_blank"
      >
        <Fa
          :icon="['fab', 'github']"
          size="lg"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
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