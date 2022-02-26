<template>
  <div
    class="square"
    :class="className"
    :style="styleObject"
    @click="clickSquare()"
  >
    <Fa
      v-if="hasIcon"
      :icon="icon"
      :size="iconSize"
    />
  </div>
</template>

<script>
import {
  computed, ref, reactive,
} from 'vue';

export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      default: 100,
    },
    icon: {
      type: [String, Array],
      default: '',
    },
    iconSize: {
      type: String,
      default: '3x',
    },
    borderWidth: {
      type: Number,
      default: 4,
    },
  },
  emits: ['click-square'],
  setup(props, context) {
    const className = ref(`square-${props.index}`);
    const hasIcon = computed(() => props.icon !== '');
    const styleObject = reactive({
      width: `${props.size}px`,
      height: `${props.size}px`,
      '--border-width': `${props.borderWidth}px`,
    });
    const clickSquare = () => {
      context.emit('click-square', {
        index: props.value,
      });
    };

    return {
      className: className.value,
      styleObject,
      hasIcon,
      clickSquare,
    };
  },
};
</script>

<style lang="scss" scoped>
.square{
  @apply text-center cursor-pointer flex items-center justify-center text-gray-800;
}
.square-0, .square-1, .square-2 {
  @apply border-gray-400;
  border-bottom-width: var(--border-width);
}
.square-6, .square-7, .square-8 {
  @apply border-gray-400;
  border-top-width: var(--border-width);
}
.square-1, .square-4, .square-7 {
  @apply border-gray-400;
  border-left-width: var(--border-width);
  border-right-width: var(--border-width);
}
</style>