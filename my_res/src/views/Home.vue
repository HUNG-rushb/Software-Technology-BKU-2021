<template>
  <div>
    <HeaderVideo />
    <Header />
    <!-- Home -->

    <Footer />
  </div>
</template>

<script>
import HeaderVideo from "../components/Layout/HeaderVideo.vue";
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";

export default {
  components: { HeaderVideo, Header, Footer },
};
</script>

<style scoped></style>
