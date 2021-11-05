<template>
  <div>
    <Header />

    <Progress :barWidth="100" :first="true" :second="true" :third="true" />

    <div class="container overflow-hidden">
      <div class="row gx-5">
        <div class="col">
          <div class="p-3">
            <button
              type="button"
              class="btn btn-danger"
              @click="$router.go(-1)"
            >
              Quay về địa chỉ
            </button>
          </div>
        </div>

        <!-- <div class="col">
          <div class="p-3">
            <router-link to="/order/confirm" class="btn btn-success">
              Đặt hàng
            </router-link>
          </div>
        </div> -->
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../Layout/Header.vue";
import Footer from "../Layout/Footer.vue";
import Progress from "./Progress.vue";

export default {
  components: { Progress, Header, Footer },
};
</script>

<style scoped></style>
