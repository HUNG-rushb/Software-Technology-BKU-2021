<template>
  <div>
    <div class="row">
      <div class="col-md-9"><OrderGrid /></div>
      <div class="col-md-3">Bill</div>
    </div>
  </div>
</template>

<script>
import OrderGrid from "../components/Order/OrderGrid.vue";

export default {
  components: { OrderGrid },
};
</script>

<style scoped></style>
