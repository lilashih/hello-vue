<template>
  <div class="item-box">
    <Item
      v-for="(icon, index) in items"
      :key="index"
      :index="index"
      :value="index"
      :icon="icon"
      :size="50"
      icon-size="2x"
      icon-color="white"
      @click-square="clickItem"
    />
  </div>
</template>

<script>
import { reactive } from 'vue';
import Square from '@/pages/TicTacToe/Partials/Board/Square.vue';

export default {
  components: {
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
.item-box{
  @apply fixed grid grid-cols-3 grid-rows-3;
  width: 150px;
  left: 60%;
  top: 40%;

  animation: shake 3s;
  animation-iteration-count: infinite;
}
@keyframes shake {
  0% { transform: rotateY(0deg) rotate(-10deg); }
  50% { transform: rotateY(0deg) rotate(-20deg); }
  100% { transform: rotateY(0deg) rotate(-10deg); }
}
</style>