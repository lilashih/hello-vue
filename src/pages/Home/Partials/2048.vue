<template>
  <Item
    :key="item.index"
    class="item-box"
    :index="item.index"
    :before-key="item.beforeKey"
    :before-value="item.beforeValue"
    :after-value="item.afterValue"
    :by-computer="item.byComputer"
    @click="clickSquare"
  />
</template>

<script>
import { reactive } from 'vue';
import Square from '@/pages/2048/Partials/Board/Square.vue';

export default {
  components: {
    Item: Square,
  },
  setup() {
    const item = reactive({
      index: 1,
      beforeKey: 0,
      beforeValue: 2,
      afterValue: 2048,
      byComputer: true,
    });

    return {
      item,
    };
  },
  methods: {
    clickSquare() {
      this.$router.push({ name: '2048' });
    },
  },
};
</script>

<style lang="scss" scoped>
.item-box {
  @apply fixed top-3/4 left-1/3 text-2xl;
  width: 70px;
  height: 70px;
  animation: shake 3s;
  animation-iteration-count: infinite;
}
@keyframes shake {
  0% { transform: rotateY(0deg) rotate(45deg); }
  50% { transform: rotateY(0deg) rotate(30deg); }
  100% { transform: rotateY(0deg) rotate(45deg); }
}
</style>