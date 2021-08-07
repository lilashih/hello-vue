<template>
  <div class="flex justify-center items-center text-center mt-6">
    <Player
      v-for="(player, index) in players"
      :key="index"
      :value="player.value"
      :icon="player.icon"
      @click="chooseRole(index)"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Player from '@/pages/TicTacToe/Partials/Player/Player.vue';

export default {
  components: {
    Player,
  },
  setup() {
    const store = useStore();

    return {
      players: store.state.ticTacToe.players,
      chooseRole: (index) => {
        store.dispatch('ticTacToe/chooseRole', { index });
      },
    };
  },
};
</script>