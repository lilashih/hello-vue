<template>
  <div
    class="restart"
    @click="$emit('restart')"
  >
    <Fa
      icon="sync-alt"
      size="lg"
    />
  </div>
</template>
<script>
export default {
  emits: ["restart"],
};
</script>

<style scoped>
.restart{
  @apply p-2 inline-block rounded bg-green-700 bg-opacity-25 text-green-800 cursor-pointer hover:bg-opacity-50 hover:text-white;
}
</style>