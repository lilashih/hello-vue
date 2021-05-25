<template>
  <div>
    <router-link to="/card">
      card
    </router-link>
    <router-link to="/tic-tac-toe">
      tic-tac-toe
    </router-link>
  </div>

  <router-view />
</template>

<script>
export default {
  components: {
  },
};
</script>