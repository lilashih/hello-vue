<template>
  <div class="inline-block m-3 cursor-pointer">
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