<template>
  <div>
    <!-- <Progress /> -->

    <router-view />

    <!-- <YourCart v-if="currentPage === 1" /> -->

    <!-- <Destination v-else-if="currentPage === 2" /> -->
  </div>
</template>

<script>
import Progress from "../components/Order/Progress.vue";
import YourCart from "../components/Order/YourCart.vue";
import Destination from "../components/Order/Destination.vue";
// import Confirm from "../components/Order/Confirm.vue";

export default {
  data() {
    return {
      currentPage: 2,
    };
  },
  components: { Progress, YourCart, Destination },
};
</script>

<style scoped></style>
