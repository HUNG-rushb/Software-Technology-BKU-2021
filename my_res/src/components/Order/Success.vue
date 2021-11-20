<template>
  <div>
    <Header />

    <div class="container mt-4 mb-4">
      <div class="row d-flex cart align-items-center justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="row g-0">
              <div class="col-md-6 border-right p-5">
                <div class="text-center order-details">
                  <div
                    class="d-flex justify-content-center mb-5 flex-column align-items-center"
                  >
                    <span class="check1">
                      <i class="bi bi-check-lg"></i>
                    </span>
                    <span class="font-weight-bold">
                      Đơn hàng đã được xác nhận!
                    </span>
                    <small class="mt-2">
                      Nhà hàng sẽ phục vụ bạn nhanh nhất có thể
                    </small>
                  </div>

                  <router-link
                    to="/home"
                    class="btn btn-success btn-block order-button"
                  >
                    Trở về nhà hàng
                  </router-link>
                </div>
              </div>

              <div class="col-md-6 background-muted">
                <div class="p-3 border-bottom">
                  <div class="mt-3">
                    <h6 class="mb-0">{{ getCurrentDate }}</h6>
                  </div>
                </div>

                <div
                  v-for="food in chosenFoods"
                  :key="food.id"
                  class="row g-0 border-bottom"
                >
                  <div class="col-md-6">
                    <div
                      class="p-3 d-flex justify-content-center align-items-center"
                    >
                      <span>{{ food.name }}</span>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div
                      class="p-3 d-flex justify-content-center align-items-center"
                    >
                      <span>{{
                        parseInt(food.price * food.qty).toLocaleString(
                          "it-IT",
                          {
                            style: "currency",
                            currency: "VND",
                          }
                        )
                      }}</span>
                    </div>
                  </div>
                </div>

                <div class="row g-0">
                  <div class="col-md-6">
                    <div
                      class="p-3 d-flex justify-content-center align-items-center"
                    >
                      <span class="font-weight-bold">Tổng cộng</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="p-3 d-flex justify-content-center align-items-center"
                    >
                      <span class="font-weight-bold">{{ totalSum }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
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

export default {
  components: { Header, Footer },
  data() {
    return {
      chosenFoods: this.$store.getters.products,
    };
  },
  computed: {
    counter() {
      return this.$store.getters.quantity;
    },
    totalSum() {
      return parseInt(this.$store.getters.totalSum).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
    getCurrentDate() {
      const browserLocale =
        navigator.languages && navigator.languages.length
          ? navigator.languages[0]
          : navigator.language;
      const intlDateTime = new Intl.DateTimeFormat(browserLocale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });

      return intlDateTime.format(new Date());
    },
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}

.progresses {
  display: flex;
  align-items: center;
}

.line {
  width: 76px;
  height: 6px;
  background: #63d19e;
}

.steps {
  display: flex;
  background-color: #63d19e;
  color: #fff;
  font-size: 12px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.check1 {
  display: flex;
  background-color: #63d19e;
  color: #fff;
  font-size: 17px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 10px;
}

.invoice-link {
  font-size: 15px;
}

.order-button {
  height: 50px;
}

.background-muted {
  background-color: #fafafc;
}
</style>
