<template>
  <div>
    <div class="card">
      <img src="../../assets/logo.jpg" class="card-img-top" alt="..." />

      <div class="card-body">
        <h5 class="card-title">Bún bò Huế</h5>
        <!-- <h5 class="card-title">{{ name }}</h5> -->

        <p class="card-text">
          <!-- {{ description }} -->
          Bún bò Huế
        </p>

        <span class="badge rounded-pill bg-success">20.000 đồng</span>

        <button class="btn btn-success shine" @click="addItemHandler">
          <i class="bi bi-cart-fill"></i> Mua
        </button>

        <!-- <Button /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../shared/Button.vue";
import { inject } from "vue";

export default {
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

  components: { Button },
  mounted() {},
  // setup(){
  //   const emitter = inject("emitter"); // Inject `emitter`
  // }
};
</script>

<style scoped>
.card {
  /* width: 18rem; */
  display: block;
}

button {
  display: inherit;
}

/* Shiny Button  */
@keyframes shine {
  0% {
    transform: translateX(-30px) rotate(-25deg);
  }

  100% {
    transform: translateX(250px) rotate(-25deg);
  }
}

.shine {
  color: #ffffff;
  margin: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 100ms linear;

  right: 0;
}

.shine:hover {
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

.btn {
  display: block;
  position: relative;
  right: 0;
  bottom: 0;
  cursor: pointer;

  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
