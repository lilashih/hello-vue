<template>
  <div class="tic-tac-toe-box">
    <Square
      v-for="(icon, index) in squares"
      :key="index"
      :index="index"
      :value="index"
      :icon="icon"
      :size="50"
      icon-size="2x"
      icon-color="white"
      @click-square="clickSquare"
    />
  </div>
</template>

<script>
import { reactive } from 'vue';
import Square from '@/components/TicTacToe/Board/Square.vue';

export default {
  components: {
    Square,
  },
  setup() {
    const squares = reactive(['', 'times', '', ['far', 'circle'], '', '', '', '', '']);

    return {
      squares,
    };
  },
  methods: {
    clickSquare() {
      this.$router.push({ name: 'tic-tac-toe' });
    },
  },
};
</script>

<style scoped>
.tic-tac-toe-box{
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