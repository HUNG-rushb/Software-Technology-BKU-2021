<template>
  <div id="yourcart">
    <div class="row">
      <div class="col-md-8"><OrderGrid /></div>
      <div class="col-md-4"><Invoice /></div>
    </div>
  </div>
</template>

<script>
import OrderGrid from "./OrderGrid.vue";
import Invoice from "./Invoice.vue";

export default {
  components: { OrderGrid, Invoice },
};
</script>

<style scoped>
#yourcart {
  margin-top: 4rem;
}
</style>
