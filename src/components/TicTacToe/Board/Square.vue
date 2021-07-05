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
      :style="{color: iconColor}"
    />
  </div>
</template>

<script>
import { computed, ref, reactive } from 'vue';

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
    iconColor: {
      type: String,
      default: 'black',
    },
  },
  emits: ['click-square'],
  setup(props, context) {
    const className = ref(`square-${props.index}`);
    const hasIcon = computed(() => props.icon !== '');
    const styleObject = reactive({
      width: `${props.size}px`,
      height: `${props.size}px`,
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
  @apply text-center cursor-pointer flex items-center justify-center;
}
.square-0, .square-1, .square-2 {
  @apply border-b-4 border-gray-500;
}
.square-6, .square-7, .square-8 {
  @apply border-t-4 border-gray-500;
}
.square-1, .square-4, .square-7 {
  @apply border-l-4 border-r-4 border-gray-500;
}
</style>