<template>
  <div>
    <img src="../../assets/CTT-VNPAY-QR.png" @click="toggleActive" />
    <button v-if="isActive" @click="test" class="btn btn-primary">
      Thanh toán bằng Ví VNPay
    </button>
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
    test() {
      let ipAddr = "116.102.67.221";
      let dateFormat = require("dateformat");

      let tmnCode = "68XBCHU7";
      let secretKey = "KPMXANQDYTDIDZHGDAXQZWFQHADRKXIV";
      let vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
      let returnUrl = "http://localhost:8080/vnpay_return";

      let date = new Date();
      let createDate = dateFormat(date, "yyyymmddHHmmss");
      let orderId = dateFormat(date, "HHmmss");
      let amount = 100;
      let bankCode = "";
      let orderInfo = "CNPM";
      let orderType = "other";
      let locale = "vn";
      let currCode = "VND";

      let vnp_Params = {};
      vnp_Params["vnp_Version"] = "2.1.0";
      vnp_Params["vnp_Command"] = "pay";
      vnp_Params["vnp_TmnCode"] = tmnCode;
      // vnp_Params['vnp_Merchant'] = ''
      vnp_Params["vnp_Locale"] = locale;
      vnp_Params["vnp_CurrCode"] = currCode;
      vnp_Params["vnp_TxnRef"] = orderId;
      vnp_Params["vnp_OrderInfo"] = orderInfo;
      vnp_Params["vnp_OrderType"] = orderType;
      vnp_Params["vnp_Amount"] = amount * 100;
      vnp_Params["vnp_ReturnUrl"] = returnUrl;
      vnp_Params["vnp_IpAddr"] = ipAddr;
      vnp_Params["vnp_CreateDate"] = createDate;
      vnp_Params["vnp_BankCode"] = bankCode;

      //   vnp_Params = sortObject(vnp_Params);

      //   vnp_Params = Object.keys(vnp_Params)
      //     .sort()
      //     .reduce((obj, key) => {
      //       obj[key] = vnp_Params[key];
      //       return obj;
      //     }, {});

      let querystring = require("qs");
      let signData = querystring.stringify(vnp_Params, { encode: false });

      let crypto = require("crypto");
      let hmac = crypto.createHmac("sha512", secretKey);

      let signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");
      vnp_Params["vnp_SecureHash"] = signed;

      console.log(vnp_Params);
      vnpUrl += "?" + querystring.stringify(vnp_Params, { encode: false });

      console.log(vnpUrl);
      //   window.location = vnpUrl;

      //   window.location = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?".concat(
      //     "vnp_Amount=",
      //     amount * 100,
      //     "&vnp_Command=pay",
      //     "&vnp_CreateDate=",
      //     createDate,
      //     "&vnp_CurrCode=",
      //     currCode,
      //     "&vnp_IpAddr=",
      //     ipAddr
      //   );

      //   ("https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?
      //   vnp_Amount=1806000&
      //   vnp_Command=pay&
      //   vnp_CreateDate=20210801153333&
      //   vnp_CurrCode=VND&
      //   vnp_IpAddr=127.0.0.1&
      //   vnp_Locale=vn&
      //   vnp_OrderInfo=Thanh+toan+don+hang+%3A5&
      //   vnp_OrderType=other&
      //   vnp_ReturnUrl=https%3A%2F%2Fdomainmerchant.vn%2FReturnUrl&
      //   vnp_TmnCode=DEMOV210&
      //   vnp_TxnRef=5&
      //   vnp_Version=2.1.0&
      //   vnp_SecureHash=3e0d61a0c0534b2e36680b3f7277743e8784cc4e1d68fa7d276e79c23be7d6318d338b477910a27992f5057bb1582bd44bd82ae8009ffaf6d141219218625c42");
    },
  },
};
</script>

<style scoped>
img {
  cursor: pointer;
  margin-right: 10rem;
}
</style>
