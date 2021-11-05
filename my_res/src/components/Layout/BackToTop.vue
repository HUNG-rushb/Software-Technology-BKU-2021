<template>
  <div>
    <button
      type="button"
      class="btn"
      @click="topFunction"
      title="Trở về đầu trang"
    >
      <i class="bi bi-chevron-double-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #c47fa1;

  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */

  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
}
</style>
