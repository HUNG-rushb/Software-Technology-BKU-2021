<template>
  <div>
    <Header />

    <HeaderVideo />

    <OrderButton />

    <AddToast />

    <BackToTop />

    <CheckCart />

    <ReviewFood />

    <HomeMenu />

    <GoogleMap />

    <Footer />

    <ZaloChat />

    <!-- <UpdateDataFirebase /> -->
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import HeaderVideo from "../components/Home/HeaderVideo.vue";
import CheckCart from "../components/Layout/CheckCart.vue";
import OrderButton from "../components/Layout/OrderButton.vue";
import AddToast from "../components/Layout/AddToast.vue";
import HomeMenu from "../components/Home/HomeMenu.vue";
import GoogleMap from "../components/Home/GoogleMap.vue";
import BackToTop from "../components/Layout/BackToTop.vue";
import Footer from "../components/Layout/Footer.vue";
import ReviewFood from "../components/Layout/ReviewFood.vue";
import ZaloChat from "../components/Layout/ZaloChat.vue";

import UpdateDataFirebase from "../components/shared/UpdateFirebaseData.vue";

export default {
  components: {
    HeaderVideo,
    Header,
    HomeMenu,
    BackToTop,
    Footer,
    CheckCart,
    OrderButton,
    AddToast,
    GoogleMap,
    ReviewFood,
    UpdateDataFirebase,
    ZaloChat,
  },
};
</script>
