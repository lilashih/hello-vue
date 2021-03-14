<template>
  <Restart @restart="restart" />
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
import { reactive, watch, computed } from "vue";
import Card from "@/components/Card/Card.vue";
import Restart from "@/components/Card/Restart.vue";
import creatCards from "@/helpers/card/creatCards";
import createConfetti from "@/helpers/card/createConfetti";

export default {
  components: {
    Card,
    Restart,
  },
  setup() {
    const cards = reactive([]);
    const actives = reactive([]);
    const matchedCount = computed(
      () => cards.filter((card) => card.matched === true).length,
    );

    const clickCard = (payload) => {
      if (cards[payload.index].matched === false) {
        cards[payload.index].visible = true;
        actives.push(payload);
      }
    };

    const restart = () => {
      actives.length = 0;
      const items = creatCards();
      items.forEach((item, index) => {
        cards[index] = item;
      });
    };

    watch(
      actives,
      (newVal) => {
        if (newVal.length === 2) {
          const first = newVal[0];
          const second = newVal[1];
          if (first.index === second.index) {
            cards[first.index].visible = false;
          } else if (first.icon === second.icon) {
            cards[first.index].matched = true;
            cards[second.index].matched = true;
          } else {
            setTimeout(() => {
              cards[first.index].visible = false;
              cards[second.index].visible = false;
            }, 1000);
          }
          actives.length = 0;
        }
      },
      { deep: true },
    );

    watch(matchedCount, (newVal) => {
      if (newVal === cards.length) {
        createConfetti();
      }
    });

    restart();

    return {
      cards,
      actives,
      matchedCount,
      clickCard,
      restart,
    };
  },
};
</script>

<style scoped>
.cards {
  @apply m-auto grid grid-cols-4 grid-rows-4 gap-2 p-1;
  @apply md:gap-6 md:max-w-screen-sm md:w-3/5;
}
.shuffle-move {
  transition: transform 1s;
}
</style>