<template>
  <div class="container">
    <Header
      title="Flip Game"
      @restart="restart"
    >
      <template #title>
        <div class="font-black">
          Flip Game
        </div>
      </template>
    </Header>
    <Game />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Header from '@/components/Common/Header.vue';
import Game from '@/components/Card/Game.vue';

export default {
  components: {
    Header,
    Game,
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
  mounted() {
    $('body').attr('class', 'body-card');
  },
};
</script>

<style scoped>
.container {
  @apply md:w-3/5 lg:w-2/5;
}
</style>