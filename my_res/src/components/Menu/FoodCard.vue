<template>
  <div>
    <div class="card">
      <img src="../assets/logo.jpg" class="card-img-top" alt="..." />

      <div class="card-body">
        <h5 class="card-title">Bún bò Huế</h5>
        <!-- <h5 class="card-title">{{ name }}</h5> -->

        <p class="card-text">
          <!-- {{ description }} -->
          Bún bò giò heo
        </p>

        <span class="badge rounded-pill bg-success">20.000 đồng</span>

        <button class="btn btn-success">
          <i class="bi bi-cart-fill"></i> Mua
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/shared/Button.vue";

export default {
  // props: {},
  components: { Button },
};
</script>

<style scoped>
.card {
  width: 18rem;
  display: block;
}

button {
  display: inherit;
}
/* .card:hover {
} */

/* button::before {
  content: "";
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%; */

/* Important */
/* left: -100%; */
/* right: -100%;

  background: linear-gradient(90deg, transparent, #fff, transparent);
  transition: 0.5s;
} */

/* button:hover::before {
  /* left: 100%; */
/* right: 100%;
} */
</style>
*/
