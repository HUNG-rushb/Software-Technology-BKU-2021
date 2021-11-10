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

    <!-- <UpdateDataFirebase /> -->
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import HeaderVideo from "../components/Home/HeaderVideo.vue";
import CheckCart from "../components/Layout/CheckCart.vue";
import AddToast from "../components/Layout/AddToast.vue";
import HomeMenu from "../components/Home/HomeMenu.vue";
import GoogleMap from "../components/Home/GoogleMap.vue";
import Footer from "../components/Layout/Footer.vue";
import ReviewFood from "../components/Layout/ReviewFood.vue";

// import UpdateDataFirebase from "../components/shared/UpdateFirebaseData.vue";

import getMenu from "../firebase/getMenu";

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
    // UpdateDataFirebase,
  },
  setup() {
    const { menu, error, load } = getMenu();

    load();

    return { menu, error };
  },
};
</script>

<style scoped></style>
