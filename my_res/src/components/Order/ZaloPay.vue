<template>
  <div>
    <img @click="toggleActive" src="../../assets/logo-zalopay.svg" />

    <button v-if="isActive" @click="makeZaloPayInvoice" class="btn btn-primary">
      Thanh toán bằng Ví ZaloPay
    </button>
    <!-- https://docs.zalopay.vn/v2/general/overview.html -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggleActive() {
      if (this.isActive == true) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },

    makeZaloPayInvoice() {
      // Node v10.15.3
      const axios = require("axios").default; // npm install axios
      const CryptoJS = require("crypto-js"); // npm install crypto-js
      const moment = require("moment"); // npm install moment

      // APP INFO
      const config = {
        app_id: "2553",
        key1: "PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL",
        key2: "kLtgPl8HHhfvMuDHPwKfgfsY4Ydm9eIz",
        endpoint: "https://sb-openapi.zalopay.vn/v2/create",
      };

      const embed_data = {};

      var items = this.$store.getters.products.map((value) => {
        return {
          name: value.name,
        };
      });

      const transID = Math.floor(Math.random() * 1000000);

      const order = {
        app_id: config.app_id,
        app_trans_id: `${moment().format("YYMMDD")}_${transID}`, // translation missing: vi.docs.shared.sample_code.comments.app_trans_id
        app_user: "user123",
        app_time: Date.now(), // miliseconds
        item: JSON.stringify(items),
        embed_data: JSON.stringify(embed_data),
        amount: parseInt(this.$store.getters.totalSum),
        description: `Lazada - Payment for the order #${transID}`,
        bank_code: "zalopayapp",
      };

      // appid|app_trans_id|appuser|amount|apptime|embeddata|item
      const data =
        config.app_id +
        "|" +
        order.app_trans_id +
        "|" +
        order.app_user +
        "|" +
        order.amount +
        "|" +
        order.app_time +
        "|" +
        order.embed_data +
        "|" +
        order.item;
      order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

      axios
        .post(config.endpoint, null, { params: order })
        .then((res) => {
          console.log(res.data);

          window.location = res.data.order_url;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
img {
  cursor: pointer;
  min-width: 4rem;
  min-height: 4rem;
  margin-right: 10rem;
}
</style>
