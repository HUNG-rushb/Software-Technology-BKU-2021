<template>
  <div>
    <HeaderVideo />
    <Header />
    <Footer />
  </div>
</template>

<script>
import HeaderVideo from "../components/Home/HeaderVideo.vue";
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";

export default {
  components: { HeaderVideo, Header, Footer },
};
</script>

<style scoped></style>
