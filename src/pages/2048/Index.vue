<template>
  <div class="container">
    <Header
      title="2048"
      @restart="restart"
    >
      <template #title>
        <span class="title"><span>2048</span></span>
      </template>
    </Header>
    <Game />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Header from '@/components/Header.vue';
import Game from '@/pages/2048/Partials/Game.vue';

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
$color-2048-header: #3b3730;

.container {
  @apply sm:w-full md:w-2/4 lg:w-2/5;
  overflow: hidden;
}
.title{
  @apply text-white;
  border-color: $color-2048-header;
}
.title span {
  background-color: $color-2048-header;
}
</style>