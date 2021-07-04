<template>
  <Item
    class="card-box"
    :index="item.index"
    :matched="item.matched"
    :visible="item.visible"
    :icon="item.icon"
    :icon-size="item.iconSize"
    :background-color="item.backgroundColor"
    :color="item.color"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    @click-card="clickCard"
  />
</template>

<script>
import { reactive } from 'vue';
import Card from '@/components/Card/Board/Card.vue';

export default {
  components: {
    Item: Card,
  },
  setup() {
    const item = reactive({
      index: 1,
      icon: 'anchor',
      backgroundColor: '#fecaca',
      color: '#069bcc',
      iconSize: '2x',
      matched: false,
      visible: false,
    });

    const mouseOver = () => {
      item.visible = true;
    };
    const mouseLeave = () => {
      item.visible = false;
    };

    return {
      item,
      mouseOver,
      mouseLeave,
    };
  },
  methods: {
    clickCard() {
      this.$router.push({ name: 'card' });
    },
  },
};
</script>

<style scoped>
.card-box {
  @apply fixed inset-1/4;
  width: 60px;
  height: 100px;
  animation: shake 3s;
  animation-iteration-count: infinite;
}
.card-box:hover {
  animation: 0;
  animation: flip 0.3s;
}
@keyframes shake {
  0% { transform: rotateY(0deg) rotate(45deg); }
  50% { transform: rotateY(0deg) rotate(30deg); }
  100% { transform: rotateY(0deg) rotate(45deg); }
}
@keyframes flip {
  0% { transform: rotateY(45deg); transform-style: preserve-3d; }
  100% { transform: rotateY(180deg); }
}
</style>