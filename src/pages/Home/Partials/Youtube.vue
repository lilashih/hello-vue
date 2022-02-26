<template>
  <Animate
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
  </Animate>
</template>

<script>
import Animate from '@/components/Animate.vue';

export default {
  components: {
    Animate,
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