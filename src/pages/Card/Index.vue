<template>
  <div class="container">
    <Header
      title="Flip Game"
      @restart="restart"
    >
      <template #title>
        <span class="title"><span>FLIP GAME</span></span>
      </template>
    </Header>
    <Game />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Header from '@/components/Header.vue';
import Game from '@/pages/Card/Partials/Game.vue';

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

<style lang="scss" scoped>
$color-card-header: #095a63;

.container {
  @apply md:w-3/5 lg:w-2/6;
}
.title{
  @apply text-white;
  border-color: $color-card-header;
}
.title span {
  background-color: $color-card-header;
}
</style>