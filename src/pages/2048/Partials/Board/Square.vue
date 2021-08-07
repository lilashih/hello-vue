<template>
  <div
    v-touch:swipe="swipSquare"
    class="square "
    :class="classes"
    :style="style"
  >
    <p>
      {{ showText(afterValue) }}
    </p>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    beforeKey: {
      type: Number,
      default: null,
    },
    beforeValue: {
      type: Number,
      default: null,
    },
    afterValue: {
      type: Number,
      required: true,
    },
    byComputer: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['swip-square'],
  setup(props, context) {
    const store = useStore();
    const style = computed(() => store.getters['game2048/style'](props.afterValue));
    const showText = (num) => (num > 0 ? num : '');
    const classes = computed(() => ((props.afterValue > 0 && props.byComputer) ? 'move-by-computer' : ''));

    const swipSquare = (direction) => {
      context.emit('swip-square', { which: direction });
    };

    return {
      style,
      classes,
      showText,
      swipSquare,
    };
  },
};
</script>

<style lang="scss" scoped>
.square {
  @apply text-center cursor-pointer flex items-center justify-center rounded-md font-mono text-4xl;
  line-height: 0rem;
  background-color: #c9bbae;
}

.move-by-computer {
  animation-name: show;
  animation-duration: 0.15s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes show {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>