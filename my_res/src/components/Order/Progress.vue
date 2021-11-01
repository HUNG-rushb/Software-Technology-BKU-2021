<template>
  <div id="progress">
    <div class="progress">
      <div
        class="progress-bar bg-success progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        v-bind:style="{ width: barWidth + '%' }"
      ></div>
    </div>

    <nav class="nav nav-justified">
      <a
        class="nav-link"
        v-bind:class="{ active: yourcart, disabled: !yourcart }"
        aria-current="page"
        href="#"
      >
        Giỏ hàng của bạn
      </a>

      <a
        class="nav-link"
        v-bind:class="{ active: destinaton, disabled: !destinaton }"
        href="#"
      >
        Địa chỉ giao hàng
      </a>

      <a
        class="nav-link"
        v-bind:class="{ active: confirm, disabled: !confirm }"
      >
        Xác nhận thanh toán
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["length"],
  data() {
    return {
      barWidth: 33,
      yourcart: true,
      destinaton: false,
      confirm: false,
    };
  },
};
</script>

<style scoped>
#progress {
  max-width: 65%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
}

.nav-link {
  border-bottom: 4px solid #796e6e;
  font-weight: bold;
  color: rgb(72, 208, 72);
}

.active {
  border-bottom: 4px solid #48d311;
}
</style>
