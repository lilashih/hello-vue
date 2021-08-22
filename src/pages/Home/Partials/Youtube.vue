<template>
  <div
    :class="classes"
    @click="clickItem"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
    <Fa
      :icon="['fab', 'youtube']"
      size="3x"
    />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const defaultClasses = ['item-box', 'animate__animated'];
    const classes = ref([]);
    const mouseOver = () => {
      classes.value = defaultClasses.concat(['animate__heartBeat']);
    };
    const mouseLeave = () => {
      classes.value = defaultClasses.concat(['animate__swing', 'animate__infinite', 'infinite']);
    };
    mouseLeave();

    return {
      classes,
      mouseOver,
      mouseLeave,
    };
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
  @apply fixed top-1/3 left-2/4 text-2xl text-red-700 cursor-pointer;
}
</style>