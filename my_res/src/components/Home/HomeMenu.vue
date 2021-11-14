<template>
  <div>
    <div class="row homegrid">
      <div class="col-md-9"><HomeMenuGrid /></div>
      <div class="col-md-3">add something</div>
    </div>
  </div>
</template>

<script>
import HomeMenuGrid from "./HomeMenuGrid.vue";

export default {
  components: { HomeMenuGrid },
};
</script>

<style scoped>
.homegrid {
  margin-top: 5rem;
}
</style>
