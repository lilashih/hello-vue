<template>
  <div
    :class="classes"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
    <Item
      :key="item.index"
      class="item"
      :index="item.index"
      :before-key="item.beforeKey"
      :before-value="item.beforeValue"
      :after-value="item.afterValue"
      :by-computer="item.byComputer"
      @click="clickSquare"
    />
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import Square from '@/pages/2048/Partials/Board/Square.vue';

export default {
  components: {
    Item: Square,
  },
  setup() {
    const defaultClasses = ['item-box', 'animate__animated'];
    const classes = ref([]);
    const item = reactive({
      index: 1,
      beforeKey: 0,
      beforeValue: 2,
      afterValue: 2048,
      byComputer: true,
    });
    const mouseOver = () => {
      classes.value = defaultClasses.concat(['animate__rubberBand']);
    };
    const mouseLeave = () => {
      classes.value = defaultClasses.concat(['animate__swing', 'animate__infinite', 'infinite']);
    };
    mouseLeave();

    return {
      classes,
      item,
      mouseOver,
      mouseLeave,
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
  @apply fixed top-3/4 left-1/3;
}
.item {
  @apply text-2xl;
  width: 70px;
  height: 70px;
}
</style>