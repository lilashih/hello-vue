<template>
  <Animation
    class="item-box"
    :over-animate="['animate__heartBeat']"
    :leave-animate="['animate__swing', 'animate__infinite', 'infinite']"
  >
    <template #content>
      <Fa
        :icon="['fab', 'youtube']"
        size="2x"
        @click="clickItem"
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
  methods: {
    clickItem() {
      this.$router.push({ name: 'youtube' });
    },
  },
};
</script>

<style lang="scss" scoped>
.item-box {
  @apply text-2xl text-red-700 cursor-pointer;
}
</style>