<template>
  <div class="cart">
    <i class="bi bi-cart-fill"></i>
    <span class="badge bg-danger" id="cart_count"> {{ counter }} </span>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.quantity;
    },
  },
};
</script>

<style scoped>
.cart {
  display: inline-block;
}

#cart_count {
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 0 5px;
  vertical-align: top;
  margin-left: -10px;
}

.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}
</style>
