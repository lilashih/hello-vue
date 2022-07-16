<template>
  <WebTitle title="Home" />

  <ul class="background">
    <li
      v-for="(li, index) in lis"
      :key="index"
      :style="li"
    />
  </ul>
  <div class="item-list">
    <Card />
    <TicTacToe />
    <Game2048 />
    <Youtube />
  </div>
</template>

<script>
import WebTitle from '@/components/WebTitle.vue';
import Card from '@/pages/Home/Partials/Card.vue';
import { reactive } from 'vue';
import TicTacToe from '@/pages/Home/Partials/TicTacToe.vue';
import Game2048 from '@/pages/Home/Partials/2048.vue';
import Youtube from '@/pages/Home/Partials/Youtube.vue';

export default {
  components: {
    WebTitle,
    Card,
    TicTacToe,
    Game2048,
    Youtube,
  },
  setup() {
    const total = 15;
    const lis = reactive([]);

    for (let i = 0; i < total; i += 1) {
      const size = Math.floor(Math.random() * 200);
      const left = Math.floor(Math.random() * 100);
      const delay = i * 3;
      lis.push({
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        'animation-delay': `${delay}s`,
      });
    }

    return {
      lis,
    };
  },
  mounted() {
    $('body').attr('class', 'body-home');
  },
};
</script>

<style lang="scss" scoped>
.item-list {
  @apply flex items-center justify-center;
  margin-top: 20%;
}
.item-box {
  @apply mx-3 relative;
}
.background{
  @apply absolute top-0 left-0 w-full h-full overflow-hidden;
  li{
    @apply absolute block list-none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: li 25s linear infinite;
    bottom: -200px;
  }
}

@keyframes li {
  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>