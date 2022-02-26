<template>
  <div
    :class="classes"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
    <slot name="content" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    overAnimate: {
      type: Array,
      default: () => [],
    },
    leaveAnimate: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const defaultClasses = ['animate__animated'];
    const classes = ref([]);
    const mouseOver = () => {
      classes.value = defaultClasses.concat(props.overAnimate);
    };
    const mouseLeave = () => {
      classes.value = defaultClasses.concat(props.leaveAnimate);
    };
    mouseLeave();

    return {
      classes,
      mouseOver,
      mouseLeave,
    };
  },
};
</script>