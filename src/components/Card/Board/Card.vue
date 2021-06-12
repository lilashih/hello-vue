<template>
  <div
    class="card"
    :class="flippedStyle"
    @click="clickCard"
  >
    <div
      v-if="!visible"
      class="face front"
    />
    <div
      v-else
      class="face back"
      :style="{ color, backgroundColor }"
    >
      <Fa
        :icon="icon"
        :size="iconSize"
        flip="horizontal"
      />
      <div
        v-if="matched"
        class="absolute bottom-0 left-0"
      >
        <Fa
          icon="check-circle"
          size="lg"
          flip="horizontal"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    matched: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
    iconSize: {
      type: String,
      default: '3x',
    },
    backgroundColor: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
  emits: ['click-card'],
  setup(props, context) {
    const flippedStyle = computed(() => (props.visible ? 'flipped' : ''));
    const clickCard = () => {
      context.emit('click-card', {
        icon: props.icon,
        index: props.index,
      });
    };

    return {
      flippedStyle,
      clickCard,
    };
  },
};
</script>

<style scoped>
.card {
  @apply border-black border-2 p-1.5 rounded-lg bg-white cursor-pointer;
  transition: transform 0.4s;
  transform-style: preserve-3d;
}
.card.flipped {
  transform: rotateY(180deg);
  transition: transform 0.3s;
}
.face {
  @apply w-full h-full flex items-center justify-center rounded-lg;
}
.front {
  background: repeating-linear-gradient(
    45deg,
    #f1b673,
    #f1b673 10px,
    #e7861c 10px,
    #e7861c 20px
  );
}
.back {
  @apply bg-red-50;
}
</style>