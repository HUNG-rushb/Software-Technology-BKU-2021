<template>
  <div>
    <div class="container overflow-hidden">
      <div class="row gy-3">
        <!-- <div v in class="col-6">
          <CartCard />
        </div> -->

        <div class="col-6">
          <CartCard />
        </div>

        <div class="col-6">
          <CartCard />
        </div>

        <div class="col-6">
          <CartCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from "./CartCard.vue";

export default {
  components: { CartCard },
};
</script>

<style scoped></style>
