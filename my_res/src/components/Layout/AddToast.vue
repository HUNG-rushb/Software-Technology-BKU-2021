<template>
  <div class="fixed-top">
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
            <!-- <i class="bi bi-check-circle-fill"></i> -->

            <b> {{ foodName }} </b> đã được thêm thành công!
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
// import { Toast } from "bootstrap/dist/js/bootstrap.esm.min.js";
// Double bootstrap error
// 0:42 2/11/2021
export default {
  data() {
    return {
      foodName: "",
    };
  },
  mounted() {
    // https://forum.vuejs.org/t/vue-3-call-a-method-from-setup/112084
    // https://stackoverflow.com/questions/64746129/how-to-call-method-in-setup-of-vuejs3-app
    const emitter = inject("emitter");

    emitter.on("add-item", (name) => {
      this.foodName = name;

      var toastLive = document.getElementById("liveToast");
      var toast = new Toast(toastLive);
      toast.show();
    });
  },
};
</script>

<style scoped>
.toast-container {
  position: absolute;
  right: 9rem;
  top: 5rem;
}

.toast {
  width: auto;
}
</style>
