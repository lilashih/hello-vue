<template>
  <div :class="classes">
    <Item
      class="item"
      :index="item.index"
      :matched="item.matched"
      :visible="item.visible"
      :icon="item.icon"
      :icon-size="item.iconSize"
      :background-color="item.backgroundColor"
      :color="item.color"
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
      @click-card="clickItem"
    />
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import Card from '@/pages/Card/Partials/Board/Card.vue';

export default {
  components: {
    Item: Card,
  },
  setup() {
    const defaultClasses = ['item-box', 'animate__animated'];
    const classes = ref([]);
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
      classes.value = defaultClasses;
    };
    const mouseLeave = () => {
      item.visible = false;
      classes.value = defaultClasses.concat(['animate__swing', 'animate__slower', 'animate__infinite', 'infinite']);
    };
    mouseLeave();

    return {
      item,
      classes,
      mouseOver,
      mouseLeave,
    };
  },
  methods: {
    clickItem() {
      this.$router.push({ name: 'card' });
    },
  },
};
</script>

<style lang="scss" scoped>
.item-box {
  @apply fixed inset-1/4;
}
.item {
  width: 60px;
  height: 100px;
}
</style>