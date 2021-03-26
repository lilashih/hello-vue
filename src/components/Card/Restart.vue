<template>
  <div
    class="restart"
    @click="$emit('restart')"
  >
    <Fa icon="sync-alt" />
  </div>
</template>
<script>
export default {
  emits: ['restart'],
};
</script>

<style scoped>
.restart{
  @apply p-2 inline-block rounded cursor-pointer hover:text-gray-500 flex justify-end;
  @apply md:justify-center;
}
</style>