<template>
  <div class="container">
    <Layout
      title="Tic-Tac-Toe"
      @restart="restart"
    >
      <template #title>
        <span class="title"><span>TIC-TAC-TOE</span></span>
      </template>
    </Layout>
    <Game />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Layout from '@/components/Layout.vue';
import Game from '@/pages/TicTacToe/Partials/Game.vue';

export default {
  components: {
    Layout,
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

<style lang="scss" scoped>
$default-color: #cc6b6b;

.container {
  @apply sm:w-full md:w-2/5;
  max-width: 300px;
}
.title{
  @apply text-white;
  border-color: $default-color;
}
.title span {
  background-color: $default-color;
}
</style>