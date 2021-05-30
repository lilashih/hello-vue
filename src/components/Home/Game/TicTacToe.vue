<template>
  <div class="tic-tac-toe-box">
    <Square
      v-for="(icon, index) in squares"
      :key="index"
      :index="index"
      :value="index"
      :icon="icon"
      size="50"
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

    const mouseOver = () => {
    };
    const mouseLeave = () => {
    };

    return {
      squares,
      mouseOver,
      mouseLeave,
    };
  },
  methods: {
    clickSquare(payload) {
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
  transform: rotateY(0deg) rotate(-10deg);
  transition: transform 0.3s;
}
</style>