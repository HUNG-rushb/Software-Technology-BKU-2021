<template>
  <div>
    <button class="btn btn-success shine" @click="addItemHandler">
      <!-- {{ text }} -->
      <i class="bi bi-cart-fill"> Mua</i>
    </button>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  // props: ["text"],

  setup() {
    const emitter = inject("emitter");

    const addItem = () => {
      emitter.emit("add-item");
    };

    return {
      addItem,
    };
  },

  methods: {
    addItemHandler() {
      this.addItem();
      this.$store.commit({
        type: "insertItem",
        test: "example",
      });
    },
  },
};
</script>

<style scoped>
@keyframes shine {
  0% {
    transform: translateX(-30px) rotate(-25deg);
  }

  100% {
    transform: translateX(250px) rotate(-25deg);
  }
}

.shine {
  margin: 1rem;
  background: #1693a5;
  color: #ffffff;
  padding: 0.75rem 1.25rem;
  width: 250px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: all 100ms linear;
}

.shine:hover {
  /* transform: scale(1.05) rotate(-2.5deg); */
  transform: scale(1.05);
}

.shine:hover::after {
  content: "";
  display: block;
  width: 75px;
  height: 175%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: 0;
  animation: shine 200ms linear;
  transform: translateX(250px) rotate(-25deg);
}
</style>
