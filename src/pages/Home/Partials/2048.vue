<template>
  <Animate
    class="item-box"
    :over-animate="['animate__rubberBand']"
    :leave-animate="['animate__tada', 'animate__infinite', 'infinite']"
  >
    <template #content>
      <Item
        :key="item.index"
        class="item"
        :index="item.index"
        :before-key="item.beforeKey"
        :before-value="item.beforeValue"
        :after-value="item.afterValue"
        :by-computer="item.byComputer"
        @click="clickItem"
      />
    </template>
  </Animate>
</template>

<script>
import { reactive } from 'vue';
import Square from '@/pages/2048/Partials/Board/Square.vue';
import Animate from '@/components/Animate.vue';

export default {
  components: {
    Animate,
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
    clickItem() {
      this.$router.push({ name: '2048' });
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  @apply text-xl;
  width: 50px;
  height: 50px;
}
.square {
  @apply text-lg;
}
</style>