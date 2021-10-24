<template>
  <div>
    <button class="btn btn-success">
      <i class="bi bi-cart-fill"></i> {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
button::before {
  content: "";
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  /* Important */
  /* left: -100%; */
  right: -100%;

  background: linear-gradient(90deg, transparent, #fff, transparent);
  transition: 0.5s;
}

button:hover::before {
  /* left: 100%; */
  right: 100%;
}
</style>
