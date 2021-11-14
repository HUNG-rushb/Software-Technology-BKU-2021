<template>
  <div>
    <Header />

    <Progress :barWidth="66" :first="true" :second="true" :third="false" />

    <div @submit.prevent="submitForm" id="dest">
      <form class="row g-3 needs-validation was-validated">
        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="recvName"
              placeholder="name@example.com"
              required
              v-model.trim="recvName"
            />
            <label for="recvName">Họ tên người nhận</label>
          </div>

          <div class="valid-feedback"></div>
        </div>

        <div class="col-md-4">
          <div class="form-floating mb-3">
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

        <div class="col-md-4">
          <div class="form-floating mb-3">
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
              Chúng tôi sẽ không chia sẻ số điện thoại của bạn cho bất cứ ai.
            </div>
          </div>

          <div class="invalid-feedback"></div>
        </div>

        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="recvAddr"
              placeholder="name@example.com"
              required
              v-model.trim="recvAddr"
            />
            <label for="recvAddr">Số nhà, đường</label>
          </div>

          <div class="invalid-feedback"></div>
        </div>

        <div class="col-md-4">
          <div class="form-floating">
            <select
              class="form-select"
              id="recvDistrict"
              aria-label="Floating label select example"
              required
              v-model="recvDistrict"
            >
              <option
                v-for="(item, index) in data"
                :key="index"
                value="{{item.name_with_type}}"
              >
                {{ item.name_with_type }}
                <!-- {{ item.name_with_type }} -->
              </option>

              <!-- <option selected></option>
            <option value="1">One</option> -->
            </select>

            <label for="recvDistrict">Quận</label>

            <div id="emailHelp" class="form-text">
              Nhà hàng chỉ phục vụ trên địa bàn Thành phố Hồ Chí Minh.
            </div>
          </div>

          <div class="invalid-feedback"></div>
        </div>

        <div class="col-md-4">
          <div class="form-floating">
            <select
              class="form-select"
              id="recvWard"
              aria-label="Floating label select example"
              required
              v-model="recvWard"
            >
              <option selected></option>
              <option value="test"></option>
            </select>

            <label for="recvWard">Phường</label>
          </div>

          <div class="invalid-feedback"></div>
        </div>

        <div class="col-12" id="last">
          <div class="container overflow-hidden">
            <div class="row gx-5">
              <div class="col">
                <div class="p-3">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="$router.go(-1)"
                  >
                    Quay về giỏ hàng
                  </button>
                </div>
              </div>

              <div class="col">
                <div class="p-3">
                  <router-link to="/order/confirm" class="btn btn-success">
                    Tiếp tục
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../Layout/Header.vue";
import Footer from "../Layout/Footer.vue";
import Progress from "./Progress.vue";
import tphcm from "../../data/tphcm";

export default {
  components: { Progress, Header, Footer },
  data() {
    return {
      recvName: "",
      recvEmail: "",
      recvTel: "",
      recvAddr: "",
      recvDistrict: "Quận Tân Phú",
      recvWard: "test",

      data: tphcm,
    };
  },
  methods: {
    submitForm() {},
  },
  computed: {},
  watch: {},
};
</script>

<style scoped>
#dest {
  margin-top: 4rem;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}

#last {
  margin-top: 3rem;
}

.btn {
  margin-right: 30%;
  margin-left: 30%;
  width: 70%;
}
</style>
