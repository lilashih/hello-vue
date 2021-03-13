<template>
  <div class="container">
    <Title title="Flip Game">
      <div class="font-black">
        Flip Game
      </div>
    </Title>
    <Game />
  </div>
</template>

<script>
import Title from "@/components/Common/Title.vue";
import Game from "@/components/Card/Game.vue";

export default {
  components: {
    Title,
    Game,
  },
  mounted() {
    document.body.classList.add("card-body");
  },
};
</script>

<style scoped>
.container {
  @apply w-full m-auto;
}
</style>