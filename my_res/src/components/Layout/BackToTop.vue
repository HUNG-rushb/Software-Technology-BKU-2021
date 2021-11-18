<template>
  <div class="fixed-top">
    <button
      type="button"
      class="btn btn-floating btn-lg"
      @click="topFunction"
      title="Trở về đầu trang"
      id="btn-back-to-top"
    >
      <i class="bi bi-arrow-up"></i>
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
  mounted() {
    let mybutton = document.getElementById("btn-back-to-top");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => {
      scrollFunction();
    };
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };
  },
};
</script>

<style scoped>
#btn-back-to-top {
  background-color: #9eeeab;
  position: fixed;
  bottom: 0.2rem;
  right: 3.2rem;
  cursor: pointer;
  border-radius: 25px;
}
</style>
