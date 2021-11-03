<template>
  <div>
    <Header />

    <HeaderVideo />

    <CheckCart />

    <AddToast />

    <HomeMenu />

    <GoogleMap />

    <Footer />
  </div>
</template>

<script>
import HeaderVideo from "../components/Home/HeaderVideo.vue";
import GoogleMap from "../components/Home/GoogleMap.vue";
import HomeMenu from "../components/Home/HomeMenu.vue";
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
import CheckCart from "../components/Layout/CheckCart.vue";
import AddToast from "../components/Layout/AddToast.vue";

export default {
  components: {
    HeaderVideo,
    Header,
    HomeMenu,
    Footer,
    CheckCart,
    AddToast,
    GoogleMap,
  },
};
</script>

<style scoped></style>
