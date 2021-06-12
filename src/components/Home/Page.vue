<template>
  <div class="container">
    <Card />
    <TicTacToe />
  </div>
</template>

<script>
import Card from '@/components/Home/Game/Card.vue';
import TicTacToe from '@/components/Home/Game/TicTacToe.vue';

export default {
  components: {
    Card,
    TicTacToe,
  },
  mounted() {
    $('body').attr('class', 'body-home');
  },
};
</script>