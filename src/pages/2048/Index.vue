<template>
  <div class="container">
    <Layout
      title="2048"
      @restart="restart"
    >
      <template #title>
        <span class="title"><span>2048</span></span>
      </template>
    </Layout>
    <Game />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Layout from '@/components/Layout.vue';
import Game from '@/pages/2048/Partials/Game.vue';

export default {
  components: {
    Layout,
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