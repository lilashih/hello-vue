<template>
  <div class="container">
    <Header
      title="2048"
      @restart="restart"
    >
      <template #title>
        <div class="font-black">
          2048
        </div>
      </template>
    </Header>
    <Game />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Header from '@/components/Common/Header.vue';
import Game from '@/components/2048/Game.vue';

export default {
  components: {
    Header,
    Game,
  },
  setup() {
    const store = useStore();
    const restart = () => {
      store.dispatch('game2048/restart');
    };

    restart();

    return {
      restart,
    };
  },
  mounted() {
    $('body').attr('class', 'body-2048');
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
}
</style>