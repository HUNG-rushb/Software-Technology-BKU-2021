<template>
  <div>
    <Header />

    <Progress :barWidth="33" :first="true" :second="false" :third="false" />

    <div id="yourcart">
      <div class="row">
        <div class="col-md-7">
          <div class="container overflow-hidden">
            <div class="row gy-3">
              <div class="col-6">
                <CartCard />
              </div>

              <div class="col-6">
                <CartCard />
              </div>

              <div class="col-6">
                <CartCard />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <Invoice />

          <div class="container overflow-hidden">
            <div class="row gx-5">
              <div class="col">
                <div class="p-3">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="$router.go(-1)"
                  >
                    Dừng thanh toán
                  </button>
                </div>
              </div>

              <div class="col">
                <div class="p-3">
                  <router-link to="/order/destination" class="btn btn-success">
                    Tiếp tục
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../Layout/Header.vue";
import Footer from "../Layout/Footer.vue";
import Progress from "./Progress.vue";
import CartCard from "./CartCard.vue";
import Invoice from "./Invoice.vue";

export default {
  components: { Header, CartCard, Invoice, Progress, Footer },
  methods: {},
};
</script>

<style scoped>
#yourcart {
  margin-top: 4rem;
}

#twobutton {
  margin-top: 3rem;
}

.btn {
  width: 100%;
}
</style>
