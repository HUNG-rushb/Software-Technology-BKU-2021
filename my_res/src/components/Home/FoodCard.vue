<template>
  <div>
    <div class="card shadow-lg">
      <img :src="image" class="card-img-top" />

      <div class="card-body">
        <h5 class="card-title">
          {{ food.name }}
          <i class="bi bi-info-circle-fill" @click="foodDetailsHandler" />
        </h5>

        <hr />

        <div class="food-card_price">
          <span>
            {{ displayPrice }}
          </span>
        </div>

        <button class="btn btn-success shine" @click="addItemHandler">
          <i class="bi bi-cart-fill"></i> Mua
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: ["food", "id"],
  setup() {
    const emitter = inject("emitter");

    return {
      emitter,
    };
  },
  methods: {
    addItemHandler() {
      this.emitter.emit("add-item", this.food.name);

      this.$store.dispatch("addToCart", {
        id: this.id,
      });
    },

    foodDetailsHandler() {
      this.emitter.emit("show-food-details", this.food);
    },
  },
  computed: {
    displayPrice() {
      return parseInt(this.food.price).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
    image() {
      return this.food.image;
    },
  },
};
</script>

<style scoped>
.card-title {
  font-size: 1rem;
}

.card-img-top {
  max-height: 10rem;
}

.card {
  display: block;
}

.card-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.food-card_price {
  font-size: 1.2rem;
  font-weight: 500;
  color: #f47a00;
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

.bi-info-circle-fill {
  cursor: pointer;
}
</style>
