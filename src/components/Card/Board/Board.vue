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
import Card from '@/components/Card/Board/Card.vue';
import createConfetti from '@/helpers/createConfetti';

export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const cards = computed(() => store.state.card.cards);
    const openedCards = computed(() => store.state.card.openedCards);
    const matchedCount = computed(() => store.getters['card/matchedCount']);

    const clickCard = (payload) => {
      store.dispatch('card/clickCard', payload);
    };

    watch(
      openedCards, (newVal) => {
        if (newVal.length === 2) {
          const first = newVal[0];
          const second = newVal[1];
          if (first.index === second.index) {
            store.commit('card/updateVisible', {
              index: first.index,
              visible: false,
            });
          } else if (first.icon === second.icon) {
            store.commit('card/updateMatched', {
              index: first.index,
              matched: true,
            });
            store.commit('card/updateMatched', {
              index: second.index,
              matched: true,
            });
          } else {
            setTimeout(() => {
              store.commit('card/updateVisible', {
                index: first.index,
                visible: false,
              });
              store.commit('card/updateVisible', {
                index: second.index,
                visible: false,
              });
            }, 1000);
          }
          store.commit('card/initOpenedCards');
        }
      }, { deep: true },
    );

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

<style scoped>
.cards {
  @apply m-auto grid grid-cols-4 gap-2 p-1;
  @apply md:gap-6 md:max-w-screen-sm md:w-3/5;
  grid-template-rows: repeat(4, minmax(25%, max-content));
  height: 80vh;
}
</style>