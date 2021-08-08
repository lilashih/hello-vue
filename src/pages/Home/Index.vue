<template>
  <Title title="Home" />
  <div class="container">
    <Card />
    <TicTacToe />
    <Game2048 />
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import Card from '@/pages/Home/Partials/Card.vue';
import TicTacToe from '@//pages/Home/Partials/TicTacToe.vue';
import Game2048 from '@//pages/Home/Partials/2048.vue';

export default {
  components: {
    Title,
    Card,
    TicTacToe,
    Game2048,
  },
  mounted() {
    $('body').attr('class', 'body-home');
  },
};
</script>