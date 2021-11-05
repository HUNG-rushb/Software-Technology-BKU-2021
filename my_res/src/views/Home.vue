<template>
  <div>
    <Header />

    <HeaderVideo />

    <CheckCart />

    <ReviewFood />

    <AddToast />

    <HomeMenu />

    <GoogleMap />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import HeaderVideo from "../components/Home/HeaderVideo.vue";
import CheckCart from "../components/Layout/CheckCart.vue";
import AddToast from "../components/Layout/AddToast.vue";
import HomeMenu from "../components/Home/HomeMenu.vue";
import GoogleMap from "../components/Layout/GoogleMap.vue";
import Footer from "../components/Layout/Footer.vue";
import ReviewFood from "../components/Layout/ReviewFood.vue";

export default {
  components: {
    HeaderVideo,
    Header,
    HomeMenu,
    Footer,
    CheckCart,
    AddToast,
    GoogleMap,
    ReviewFood,
  },
};
</script>

<style scoped></style>
