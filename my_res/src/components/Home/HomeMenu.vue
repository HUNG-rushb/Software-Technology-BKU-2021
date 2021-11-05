<template>
  <div>
    <div class="row">
      <div class="col-md-9"><HomeMenuGrid /></div>
      <!-- <div class="col-md-3"><GoogleAds /></div> -->
    </div>
  </div>
</template>

<script>
import HomeMenuGrid from "./HomeMenuGrid.vue";
// import GoogleAds from "../shared/GoogleAds.vue";

export default {
  components: { HomeMenuGrid },
};
</script>

<style scoped></style>
