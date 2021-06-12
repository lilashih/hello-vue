<template>
  <Restart @restart="restart" />
  <Board />
</template>

<script>
import { useStore } from 'vuex';
import Board from '@/components/Card/Board/Board.vue';
import Restart from '@/components/Common/Restart.vue';

export default {
  components: {
    Board,
    Restart,
  },
  setup() {
    const store = useStore();
    const restart = () => {
      store.dispatch('card/restart');
    };

    restart();

    return {
      restart,
    };
  },
};
</script>