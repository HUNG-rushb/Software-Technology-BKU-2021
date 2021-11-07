<template>
  <div>
    <Header />
    <CheckCart />
    <MenuGrid />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
import CheckCart from "../components/Layout/CheckCart.vue";
import MenuGrid from "../components/Menu/MenuGrid.vue";

export default {
  components: { MenuGrid, Header, Footer, CheckCart },
};
</script>

<style scoped></style>
