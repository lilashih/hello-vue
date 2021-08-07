<template>
  <div class="cards">
    <transition-group name="shuffle">
      <Card
        v-for="(card, index) in cards"
        :key="`${card.icon}_${card.v}`"
        :index="index"
        :matched="card.matched"
        :visible="card.visible"
        :icon="card.icon"
        :background-color="card.backgroundColor"
        :color="card.color"
        @click-card="clickCard"
      />
    </transition-group>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { watch, computed } from 'vue';
import Card from '@/pages/Card/Partials/Board/Card.vue';
import createConfetti from '@/helpers/createConfetti';

export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const cards = computed(() => store.state.card.cards);
    const matchedCount = computed(() => store.getters['card/matchedCount']);

    const clickCard = (payload) => {
      store.dispatch('card/clickCard', payload);
    };

    watch(matchedCount, (newVal) => {
      if (newVal === cards.value.length) {
        createConfetti();
      }
    });

    return {
      cards,
      matchedCount,
      clickCard,
    };
  },
};
</script>

<style lang="scss" scoped>
.cards {
  @apply m-auto grid grid-cols-4 gap-2 p-1;
  @apply md:gap-6 md:max-w-screen-sm;
  grid-template-rows: repeat(4, minmax(25%, max-content));
  height: 75vh;
}
</style>