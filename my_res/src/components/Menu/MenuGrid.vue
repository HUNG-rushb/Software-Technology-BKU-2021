<template>
  <div>
    <div class="row homegrid">
      <div class="col-md-3">add something</div>
      <div class="col-md-9"><FoodTable /></div>
    </div>
  </div>
</template>

<script>
import FoodTable from "./FoodTable.vue";

export default {
  components: { FoodTable },
};
</script>

<style scoped>
.homegrid {
  margin-top: 5rem;
}
</style>
