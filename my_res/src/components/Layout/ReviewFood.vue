<template>
  <div>
    <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="offcanvasBottom"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">
          Tên món
        </h5>

        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body small">
        Mô tả món ăn
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import { Offcanvas } from "bootstrap";

export default {
  setup() {
    const emitter = inject("emitter");

    const showDetailsModal = () => {
      var modal = new Offcanvas(document.getElementById("offcanvasBottom"));
      modal.show();
    };

    emitter.on("show-food-details", () => {
      showDetailsModal();
    });
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#offcanvasBottom {
  height: 95vh;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}
</style>
