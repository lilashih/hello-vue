<template>
  <Animation
    class="item-box"
    :leave-animate="['animate__swing', 'animate__slower', 'animate__infinite', 'infinite']"
  >
    <template #content>
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
    </template>
  </Animation>
</template>

<script>
import { reactive } from 'vue';
import Card from '@/pages/Card/Partials/Board/Card.vue';
import Animation from '@/components/Animation.vue';

export default {
  components: {
    Animation,
    Item: Card,
  },
  setup() {
    const item = reactive({
      index: 1,
      icon: 'anchor',
      backgroundColor: '#fecaca',
      color: '#069bcc',
      iconSize: '1x',
      matched: false,
      visible: false,
    });
    const mouseOver = () => {
      item.visible = true;
    };
    const mouseLeave = () => {
      item.visible = false;
    };
    mouseLeave();

    return {
      item,
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
.item {
  width: 40px;
  height: 65px;
  @apply border p-1;
}
</style>