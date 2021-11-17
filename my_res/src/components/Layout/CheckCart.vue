<template>
  <div class="fixed-top">
    <button
      class="btn"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      id="cart"
    >
      Giỏ hàng <ShoppingCart />
    </button>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header ">
        <h5 id="offcanvasRightLabel">Giỏ hàng của bạn</h5>

        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-header ">
        <h5>{{ counter }} món</h5>
        <h5>{{ totalSum }}</h5>
      </div>

      <div v-if="chosenFoods.length === 0" class="offcanvas-body">
        Không có gì...
      </div>
      <div v-else class="offcanvas-body">
        <ItemCard
          v-for="food in chosenFoods"
          :food="food"
          :key="food.id"
          :id="food.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCart from "./ShoppingCart.vue";
import ItemCard from "./ItemCard.vue";

export default {
  data() {
    return {
      chosenFoods: this.$store.getters.products,
    };
  },

  computed: {
    counter() {
      return this.$store.getters.quantity;
    },
    totalSum() {
      return parseInt(this.$store.getters.totalSum).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
  },
  components: { ShoppingCart, ItemCard },
};
</script>

<style scoped>
#cart {
  background-color: #a4c066;
  position: absolute;
  right: 1rem;
  top: 5rem;
}

.offcanvas-header {
  padding: 0.6rem;
}
</style>
