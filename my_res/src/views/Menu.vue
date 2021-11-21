<template>
  <div>
    <Header />

    <OrderButton />
    <AddToast />
    <BackToTop />
    <CheckCart />
    <ReviewFood />

    <MenuGrid />

    <Footer />

    <ZaloChat />
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
import CheckCart from "../components/Layout/CheckCart.vue";
import AddToast from "../components/Layout/AddToast.vue";
import BackToTop from "../components/Layout/BackToTop.vue";
import ZaloChat from "../components/Layout/ZaloChat.vue";
import MenuGrid from "../components/Menu/MenuGrid.vue";
import ReviewFood from "../components/Layout/ReviewFood.vue";

import OrderButton from "../components/Layout/OrderButton.vue";
export default {
  components: {
    MenuGrid,
    Header,
    Footer,
    CheckCart,
    OrderButton,
    ZaloChat,
    BackToTop,
    AddToast,
    ReviewFood,
  },
};
</script>
