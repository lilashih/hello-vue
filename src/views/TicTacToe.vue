<template>
  <div class="container">
    <Header
      title="Tic-Tac-Toe"
      @restart="restart"
    >
      <template #title>
        <div class="font-black">
          Tic Tac Toe
        </div>
      </template>
    </Header>
    <Game />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Header from '@/components/Common/Header.vue';
import Game from '@/components/TicTacToe/Game.vue';

export default {
  components: {
    Header,
    Game,
  },
  setup() {
    const store = useStore();
    const restart = () => {
      store.dispatch('ticTacToe/restart');
    };

    restart();

    return {
      restart,
    };
  },
  mounted() {
    $('body').attr('class', 'body-tic-tac-toe');
  },
};
</script>

<style scoped>
.container {
  width: 250px;
}
</style>