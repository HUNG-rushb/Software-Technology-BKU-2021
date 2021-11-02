<template>
  <div id="yourcart">
    <div class="row">
      <div class="col-md-8">
        <div class="container overflow-hidden">
          <div class="row gy-3">
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

      <div class="col-md-4"><Invoice /></div>
    </div>
  </div>
</template>

<script>
import CartCard from "./CartCard.vue";
import Invoice from "./Invoice.vue";

export default {
  components: { CartCard, Invoice },
};
</script>

<style scoped>
#yourcart {
  margin-top: 4rem;
}
</style>
