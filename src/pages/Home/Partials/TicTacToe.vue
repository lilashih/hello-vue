<template>
  <Animate
    class="item-box"
    :over-animate="['animate__rotateIn']"
    :leave-animate="['animate__jello', 'animate__slower', 'animate__infinite', 'infinite']"
  >
    <template #content>
      <div class="item">
        <Item
          v-for="(icon, index) in items"
          :key="index"
          :index="index"
          :value="index"
          :icon="icon"
          :size="20"
          :icon-size="'1x'"
          :icon-color="white"
          :border-width="2"
          @click-square="clickItem"
        />
      </div>
    </template>
  </Animate>
</template>

<script>
import { reactive } from 'vue';
import Square from '@/pages/TicTacToe/Partials/Board/Square.vue';
import Animate from '@/components/Animate.vue';

export default {
  components: {
    Animate,
    Item: Square,
  },
  setup() {
    const items = reactive(['', 'times', '', ['far', 'circle'], '', '', '', '', '']);

    return {
      items,
    };
  },
  methods: {
    clickItem() {
      this.$router.push({ name: 'tic-tac-toe' });
    },
  },
};
</script>

<style lang="scss" scoped>
.item{
  @apply grid grid-cols-3 grid-rows-3;
  width: 60px;
  height: 60px;
}
.square {
  @apply text-white;
}
</style>