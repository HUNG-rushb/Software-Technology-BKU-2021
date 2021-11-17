<template>
  <div>
    <!-- <button @click="toggleActive">toggle MoMo</button> -->
    <img @click="toggleActive" src="../../assets/MoMo_Logo.png" />

    <img v-if="isActive == true" :src="qrCode" id="qr" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    qrCode() {
      const amount = this.$store.getters.totalSum.toString();
      return "http://momofree.apimienphi.com/api/QRCode?phone=0964407953".concat(
        "&amount=",
        amount,
        "& note=",
        parseInt(amount).toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })
      );
    },
  },
  methods: {
    toggleActive() {
      if (this.isActive == true) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
      //    window.location = res.data.order_url;
    },
  },
};
</script>

<style scoped>
img {
  max-height: 10rem;
  max-width: 10rem;
}

#qr {
  margin-left: 5rem;
  max-height: 20rem;
  max-width: 20rem;
}
</style>
