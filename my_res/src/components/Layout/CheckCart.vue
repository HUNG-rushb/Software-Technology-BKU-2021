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
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Giỏ hàng của bạn</h5>

        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body">
        <router-link class="btn btn-success" to="/order">
          Thanh toán
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCart from "./ShoppingCart.vue";

export default {
  // props: {
  //   products: {
  //     type: Array,
  //     required: true,
  //   },
  // },

  data() {
    return {};
  },

  components: { ShoppingCart },

  methods: {},
};
</script>

<style scoped>
#cart {
  background-color: #a4c066;
  position: absolute;
  right: 1rem;
  top: 5rem;
}
</style>
