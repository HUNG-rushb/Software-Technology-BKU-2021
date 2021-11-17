<template>
  <div class="confirmorder">
    <Header />

    <!-- <Progress :barWidth="100" :first="true" :second="true" :third="true" /> -->

    <div class="container">
      <div class="row">
        <div class="col-md-4 order-md-2 mb-4" id="invoice">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Giỏ hàng của bạn</span>
            <span class="badge badge-secondary badge-pill"></span>
          </h4>
          <!-- sticky-md-top -->
          <ul class="list-group mb-3">
            <li
              v-for="food in chosenFoods"
              :key="food.id"
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">{{ food.name }}</h6>
              </div>

              <span class="text-muted">{{
                parseInt(food.price * food.qty).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              }}</span>
            </li>

            <li class="list-group-item d-flex justify-content-between">
              <span>Tổng tiền: </span>
              <strong>{{ totalSum }}</strong>
            </li>
          </ul>
        </div>

        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Địa chỉ nhận hàng</h4>

          <form class="needs-validation" novalidate="">
            <!-- <div class="row"> -->
            <div class="mb-3">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="recvName"
                  placeholder="name@example.com"
                  required
                  v-model.trim="recvName"
                />
                <label for="recvName">Họ tên </label>
              </div>

              <!-- <div class="valid-feedback"></div> -->
            </div>

            <div class="mb-3">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="recvEmail"
                  placeholder="name@example.com"
                  required
                  v-model.trim="recvEmail"
                />
                <label for="recvEmail">Địa chỉ Email</label>

                <div id="emailHelp" class="form-text">
                  Chúng tôi sẽ không chia sẻ email của bạn cho bất cứ ai.
                </div>
              </div>

              <div class="valid-feedback"></div>
            </div>

            <div class="mb-3">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="recvTel"
                  placeholder="name@example.com"
                  required
                  v-model.trim="recvTel"
                />
                <label for="recvTel">Số điện thoại</label>

                <div id="emailHelp" class="form-text">
                  Chúng tôi sẽ không chia sẻ số điện thoại của bạn cho bất cứ
                  ai.
                </div>
              </div>

              <div class="valid-feedback"></div>
            </div>

            <div class="mb-3">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="recvAddr"
                  placeholder="name@example.com"
                  required
                  v-model.trim="recvAddr"
                />
                <label for="recvAddr">Địa chỉ nhận hàng </label>

                <div id="emailHelp" class="form-text">
                  Nhà hàng chỉ phục vụ trên địa bàn Thành phố Hồ Chí Minh.
                </div>
              </div>

              <div class="invalid-feedback"></div>
            </div>

            <!-- <div class="row">
              <div class="col-md-4 mb-3">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="recvDistrict"
                    aria-label="Floating label select example"
                    required
                    v-model="recvDistrict"
                  >
                    <option
                      v-for="(item, index) in tphcm"
                      :key="index"
                      value="{{item.name_with_type}}"
                    >
                      {{ item.name_with_type }}
                    </option>
                  </select>

                  <label for="recvDistrict">Quận</label>

                  <div id="emailHelp" class="form-text">
                    Nhà hàng chỉ phục vụ trên địa bàn Thành phố Hồ Chí Minh.
                  </div>
                </div>

                <div class="invalid-feedback"></div>
              </div>

              <div v-if="recvDist !== ''" class="col-md-4 mb-3">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="recvWard"
                    aria-label="Floating label select example"
                    required
                    v-model="recvWard"
                  >
                    <option
                      v-for="(item, index) in chosenDist"
                      :key="index"
                      value="{{item.name_with_type}}"
                    >
                      {{ item.name_with_type }}
                    </option>
                  </select>

                  <label for="recvWard">Phường</label>
                </div>

                <div class="invalid-feedback"></div>
              </div>
            </div> -->

            <hr class="mb-4" />

            <h4 class="mb-3">Thanh toán</h4>

            <!-- <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label class="form-check-label" for="exampleRadios1">
                Thẻ ATM
              </label>
            </div> -->

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label class="form-check-label" for="exampleRadios1">
                Thanh toán khi nhận hàng
              </label>
            </div>

            <ul class="list-group">
              <li class="list-group-item"><MoMo /></li>
              <li class="list-group-item"><ZaloPay /></li>
              <li class="list-group-item"><VNPay /></li>
            </ul>

            <hr class="mb-4" />
          </form>
        </div>
      </div>
    </div>

    <div class="container overflow-hidden">
      <div class="row gx-5">
        <div class="col">
          <div class="p-3">
            <button
              type="button"
              class="btn btn-danger"
              @click="$router.go(-1)"
            >
              Quay về
            </button>
          </div>
        </div>

        <div class="col">
          <div class="p-3">
            <router-link to="/order/confirm" class="btn btn-success">
              Đặt hàng
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- <MoMoOfficial /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "../Layout/Header.vue";
import Footer from "../Layout/Footer.vue";
import ZaloPay from "./ZaloPay.vue";
import MoMo from "./MoMo.vue";
import MoMoOfficial from "./MoMoOfficial.vue";
import VNPay from "./VNPay.vue";
// import Progress from "./Progress.vue";
// import tphcm from "../../data/tphcm";

export default {
  components: { Header, Footer, ZaloPay, MoMo, VNPay, MoMoOfficial },
  data() {
    return {
      chosenFoods: this.$store.getters.products,

      recvName: "",
      recvEmail: "",
      recvTel: "",
      recvAddr: "",
    };
  },

  computed: {
    totalSum() {
      return parseInt(this.$store.getters.totalSum).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
  },
  setup() {
    var forms = document.getElementsByClassName("needs-validation");

    Array.prototype.filter.call(forms, (form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  },

  methods: {
    submitForm() {},
  },
};
</script>

<style scoped>
/* #invoice {
  margin-top: 8rem;
} */

.confirmorder {
  margin-top: 8rem;
  margin-bottom: 8rem;
}
.container {
  max-width: 960px;
}

.lh-condensed {
  line-height: 1.25;
}

button[type="submit"] {
  background-color: rgb(224, 57, 57);
  color: white;
}

button[type="submit"]:hover {
  background-color: #aa3a3a;
}
</style>
