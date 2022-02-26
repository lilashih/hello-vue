<template>
  <Title :title="title" />

  <div class="text-center mt-8 mb-5 text-3xl">
    <slot name="title" />
  </div>

  <div class="head-icon-section">
    <div
      class="text-left w-1/12"
      @click="$emit('restart')"
    >
      <Fa
        class="head-icon"
        icon="sync-alt"
        size="lg"
      />
    </div>
    <div class="text-right w-11/12">
      <router-link
        class="mr-1"
        :to="{ name: 'home'}"
      >
        <Fa
          class="head-icon"
          icon="home"
          size="lg"
        />
      </router-link>
      <a
        href="https://github.com/lilashih/hello-vue"
        target="_blank"
      >
        <Fa
          class="head-icon"
          :icon="['fab', 'github']"
          size="lg"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';

export default {
  components: {
    Title,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  emits: ['restart'],
};
</script>

<style lang="scss" scoped>
.head-icon-section{
  @apply flex justify-center m-auto px-2 mt-2 mb-1.5;
}
.head-icon{
  @apply cursor-pointer hover:text-gray-500;
}
</style>