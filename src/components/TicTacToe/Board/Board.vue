<template>
  <div class="board">
    <Square
      v-for="(icon, index) in squares"
      :key="index"
      :value="index"
      :icon="icon"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Square from '@/components/TicTacToe/Board/Square.vue';

export default {
  components: {
    Square,
  },
  setup() {
    const store = useStore();
    return {
      squares: store.state.ticTacToe.squares,
    };
  },
};
</script>

<style scoped>
.board{
  @apply m-auto grid grid-cols-3 grid-rows-3 p-1 w-1/2;
}
</style>