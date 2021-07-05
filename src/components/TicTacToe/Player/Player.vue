<template>
  <div class="player">
    <Fa
      :icon="icon"
      size="2x"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    icon: {
      type: [String, Array],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.player {
  @apply inline-block m-3 p-6 cursor-pointer font-black w-24 rounded-sm font-mono text-white border-8 bg-tic-tac-toe border-tic-tac-toe;
  box-shadow: 0 0 5px rgba(68,68,68,0.6);
}
.player:hover {
  @apply text-tic-tac-toe;
  background: none;
}
</style>