<template>
  <KeyboardEvent @keyup="keyupEvent" />
  <div class="board">
    <Square
      v-for="(square, index) in squareFeatures"
      :key="index"
      :index="index"
      :before-key="square.beforeKey"
      :before-value="square.beforeValue"
      :after-value="square.afterValue"
      :by-computer="square.byComputer"
      @swip-square="keyupEvent"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Square from '@/components/2048/Board/Square.vue';
import KeyboardEvent from '@/components/Common/KeyboardEvent.vue';

export default {
  components: {
    Square,
    KeyboardEvent,
  },
  setup() {
    const store = useStore();
    const squareFeatures = computed(() => store.state.game2048.squareFeatures);

    const moveLeft = () => {
      store.dispatch('game2048/moveLeft');
    };
    const moveRight = () => {
      store.dispatch('game2048/moveRight');
    };
    const moveDown = () => {
      store.dispatch('game2048/moveDown');
    };
    const moveUp = () => {
      store.dispatch('game2048/moveUp');
    };

    const keyupEvent = (e) => {
      switch (e.which) {
        case 37: case 'left':
          moveLeft();
          break;
        case 38: case 'top':
          moveUp();
          break;
        case 39: case 'right':
          moveRight();
          break;
        case 40: case 'bottom':
          moveDown();
          break;
        default:
          break;
      }
    };

    return {
      squareFeatures,
      keyupEvent,
    };
  },
};
</script>

<style lang="scss" scoped>
.board {
  @apply m-4 grid grid-cols-4 gap-3 p-3 rounded-md;
  background-color: #baa99b;
  height: 70vh;
}
</style>