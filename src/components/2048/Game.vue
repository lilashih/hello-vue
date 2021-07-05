<template>
  <div class="score">
    SCORE | {{ score }}
  </div>
  <Board />
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Board from '@/components/2048/Board/Board.vue';

export default {
  components: {
    Board,
  },
  setup() {
    const store = useStore();
    const score = computed(() => store.getters['game2048/score']);

    return {
      score,
    };
  },
};
</script>

<style lang="scss" scoped>
.score {
  @apply rounded-md text-white p-1 text-center m-auto mb-2 w-2/6 font-bold;
  background-color: #3b3730;
}
</style>