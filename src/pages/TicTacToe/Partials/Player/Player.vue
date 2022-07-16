<template>
  <Animation
    class="player"
    :over-animate="['animate__tada']"
  >
    <template #content>
      <Fa
        :icon="icon"
        size="2x"
      />
    </template>
  </Animation>
</template>

<script>
import Animation from '@/components/Animation.vue';

export default {
  components: {
    Animation,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    icon: {
      type: [String, Array],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.player {
  @apply inline-block m-3 p-8 cursor-pointer w-32 rounded-sm font-mono text-gray-800 font-black;
  box-shadow: 0 0 5px rgba(68,68,68,0.6);
}
</style>