<template>
  <div
    class="board"
    :class="(hasWinner || tie ? 'opacity-20' : '')"
  >
    <Square
      v-for="(icon, index) in squares"
      :key="index"
      :index="index"
      :value="index"
      :icon="icon"
      @click-square="clickSquare"
    />
  </div>
</template>

<script>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import Square from '@/components/TicTacToe/Board/Square.vue';
import createConfetti from '@/helpers/card/createConfetti';

export default {
  components: {
    Square,
  },
  setup() {
    const store = useStore();
    const hasWinner = computed(() => store.getters['ticTacToe/hasWinner']);
    const winner = computed(() => store.getters['ticTacToe/winner']);
    const tie = computed(() => store.getters['ticTacToe/tie']);

    const clickSquare = (payload) => {
      if (!hasWinner.value) {
        store.dispatch('ticTacToe/clickSquareByMe', payload);
      }
    };

    watch(hasWinner, (newVal) => {
      if (newVal && winner.value.role === 'me') {
        createConfetti();
      }
    });

    return {
      squares: store.state.ticTacToe.squares,
      hasWinner,
      tie,
      clickSquare,
    };
  },
};
</script>

<style scoped>
.board{
  @apply mx-auto mt-6 mb-4 grid grid-cols-3 grid-rows-3;
  width: 300px;
}
</style>