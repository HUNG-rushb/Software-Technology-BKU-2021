<template>
  <div>
    <div class="toast-container">
      <div
        id="liveToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="d-flex">
          <div class="toast-body">
            <b>Thêm vào giỏ hàng thành công!</b>
          </div>

          <button
            type="button"
            class="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import { Toast } from "bootstrap";
// import { Toast } from "bootstrap/dist/js/bootstrap.esm.min.js"; Double bootstrap error
// 0:42 2/11/2021

export default {
  setup() {
    // https://forum.vuejs.org/t/vue-3-call-a-method-from-setup/112084
    // https://stackoverflow.com/questions/64746129/how-to-call-method-in-setup-of-vuejs3-app
    const emitter = inject("emitter"); // Inject `emitter`

    const alertToast = () => {
      var toastLive = document.getElementById("liveToast");
      var toast = new Toast(toastLive);
      toast.show();
    };

    emitter.on("add-item", () => {
      alertToast();
    });
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.toast-container {
  position: fixed;
  right: 1rem;
  top: 9rem;
}

.toast {
  width: auto;
}
</style>
