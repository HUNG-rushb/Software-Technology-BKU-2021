<template>
  <div>
    <Header />
    <Feedback />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
import Feedback from "../components/Feedback/Feedback.vue";

export default {
  components: { Feedback, Header, Footer },
};
</script>

<style></style>
