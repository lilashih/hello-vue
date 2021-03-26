<template>
  <div v-if="hasRole">
    You are:
    <Fa :icon="me.icon" />
  </div>

  {{ winner }}

  <Board v-if="hasRole" />
  <ChoosePlayer v-else />
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import ChoosePlayer from '@/components/TicTacToe/Player/ChoosePlayer.vue';
import Board from '@/components/TicTacToe/Board/Board.vue';

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

    return {
      me,
      hasRole,
      winner,
    };
  },
};
</script>

<style scoped>
</style>