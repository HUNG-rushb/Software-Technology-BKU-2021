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
        <h5 style="display:block;">{{ counter }} món</h5>
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

        <router-link class="btn btn-success" to="/order/cart">
          Thanh toán
        </router-link>
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

.btn-success {
  width: 100%;
}

.offcanvas-header {
  padding: 0.6rem;
}
</style>
