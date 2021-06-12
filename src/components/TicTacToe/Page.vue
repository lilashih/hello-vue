<template>
  <div class="container">
    <Title title="Tic-Tac-Toe">
      <div class="font-black">
        Tic Tac Toe
      </div>
    </Title>
    <Game />
  </div>
</template>

<script>
import Title from '@/components/Common/Title.vue';
import Game from '@/components/TicTacToe/Game.vue';

export default {
  components: {
    Title,
    Game,
  },
  mounted() {
    $('body').attr('class', 'body-tic-tac-toe');
  },
};
</script>