<template>
  <div class="container">
    <Card />
    <TicTacToe />
  </div>
</template>

<script>
import Card from '@/components/Home/Card.vue';
import TicTacToe from '@/components/Home/TicTacToe.vue';

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