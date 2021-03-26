<template>
  <div class="text-center mt-6 bg-green-50 p-8">
    <div class="text-2xl mb-4 semibold">
      CHOOSE
    </div>
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
import Player from '@/components/TicTacToe/Player/Player.vue';

export default {
  components: {
    Player,
  },
  setup() {
    const store = useStore();

    return {
      players: store.state.ticTacToe.players,
      chooseRole: (index) => store.dispatch('ticTacToe/chooseRole', { index }),
    };
  },
};
</script>