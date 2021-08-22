<template>
  <div
    :class="classes"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
    <Item
      v-for="(icon, index) in items"
      :key="index"
      :index="index"
      :value="index"
      :icon="icon"
      :size="50"
      icon-size="2x"
      icon-color="white"
      @click-square="clickItem"
    />
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import Square from '@/pages/TicTacToe/Partials/Board/Square.vue';

export default {
  components: {
    Item: Square,
  },
  setup() {
    const defaultClasses = ['item-box', 'animate__animated'];
    const classes = ref([]);
    const items = reactive(['', 'times', '', ['far', 'circle'], '', '', '', '', '']);
    const mouseOver = () => {
      classes.value = defaultClasses.concat(['animate__rotateIn']);
    };
    const mouseLeave = () => {
      classes.value = defaultClasses.concat(['animate__jello', 'animate__slower', 'animate__infinite', 'infinite']);
    };
    mouseLeave();

    return {
      items,
      classes,
      mouseOver,
      mouseLeave,
    };
  },
  methods: {
    clickItem() {
      this.$router.push({ name: 'tic-tac-toe' });
    },
  },
};
</script>

<style lang="scss" scoped>
.item-box{
  @apply fixed grid grid-cols-3 grid-rows-3;
  width: 150px;
  left: 60%;
  top: 40%;
}
</style>