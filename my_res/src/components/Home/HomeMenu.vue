<template>
  <div>
    <div class="row homegrid">
      <div class="col-md-9"><HomeMenuGrid /></div>
      <div class="col-md-3"><RightSideBar /></div>
    </div>
  </div>
</template>

<script>
import HomeMenuGrid from "./HomeMenuGrid.vue";
import RightSideBar from "./RightSideBar.vue";

export default {
  components: { HomeMenuGrid, RightSideBar },
};
</script>

<style scoped>
.homegrid {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>
