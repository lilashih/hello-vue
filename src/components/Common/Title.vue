<template>
  <div class="relative flex justify-center m-auto my-2 sm:my-4">
    <div class="text-3xl">
      <slot />
    </div>
    <div class="absolute right-0 text-right">
      <router-link
        class="mr-1"
        :to="{ name: 'home'}"
      >
        <Fa
          icon="home"
          size="lg"
        />
      </router-link>
      <a
        href="https://github.com/lilashih/hello-world"
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