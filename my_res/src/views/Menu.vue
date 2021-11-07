<template>
  <div>
    <Header />
    <MenuGrid />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
import MenuGrid from "../components/Menu/MenuGrid.vue";

export default {
  components: { MenuGrid, Header, Footer },
};
</script>

<style scoped></style>
