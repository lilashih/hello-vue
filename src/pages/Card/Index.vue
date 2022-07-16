<template>
  <div class="container">
    <Layout
      title="Flip Game"
      @restart="restart"
    >
      <template #title>
        <span class="title"><span>FLIP GAME</span></span>
      </template>
    </Layout>
    <Game />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Layout from '@/components/Layout.vue';
import Game from '@/pages/Card/Partials/Game.vue';

export default {
  components: {
    Layout,
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
$default-color: #095a63;

.container {
  @apply md:w-3/5 lg:w-2/6;
}
.title{
  @apply text-white;
  border-color: $default-color;
}
.title span {
  background-color: $default-color;
}
</style>