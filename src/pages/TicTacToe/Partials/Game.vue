<template>
  <div
    v-if="hasWinner || tie"
    class="over"
  >
    <span v-if="tie">It is a tie !</span>
    <span v-else-if="winner.role === 'me'">You win !</span>
    <span v-else>You lose !</span>
  </div>

  <div v-if="hasRole">
    <div class="text-center">
      <span class="me">
        You are:
        <Fa :icon="me.icon" />
      </span>
    </div>
    <Board />
  </div>
  <ChoosePlayer v-else />
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import ChoosePlayer from '@/pages/TicTacToe/Partials/Player/ChoosePlayer.vue';
import Board from '@/pages/TicTacToe/Partials/Board/Board.vue';

export default {
  components: {
    ChoosePlayer,
    Board,
  },
  setup() {
    const store = useStore();
    const me = computed(() => store.getters['ticTacToe/me']);
    const hasRole = computed(() => store.getters['ticTacToe/hasRole']);
    const winner = computed(() => store.getters['ticTacToe/winner']);
    const hasWinner = computed(() => store.getters['ticTacToe/hasWinner']);
    const tie = computed(() => store.getters['ticTacToe/tie']);

    return {
      me,
      hasRole,
      winner,
      hasWinner,
      tie,
    };
  },
};
</script>

<style lang="scss" scoped>
.me {
  @apply text-base py-1 px-5 rounded-sm font-mono text-white bg-tic-tac-toe;
}
.over {
  @apply absolute text-center pt-32 inset-x-4;
}
.over span{
  @apply text-3xl px-9 py-2 font-mono;
}
</style>