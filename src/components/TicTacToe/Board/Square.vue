<template>
  <div
    class="square"
    @click="clickSquare(value)"
  >
    <Fa
      v-if="hasIcon"
      :icon="icon"
      size="3x"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    icon: {
      type: [String, Array],
      default: '',
    },
  },
  setup(props) {
    const store = useStore();
    const hasIcon = computed(() => props.icon !== '');
    const clickSquare = (value) => {
      if (!store.getters['ticTacToe/me'].lock) {
        store.dispatch('ticTacToe/clickSquare', { index: value });
      }
    };

    return {
      hasIcon,
      clickSquare,
    };
  },
};
</script>

<style scoped>
.square{
  @apply border-2 h-32 w-auto text-center pt-10 cursor-pointer;
}
</style>