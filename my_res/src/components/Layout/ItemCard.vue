<template>
  <div>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="image" class="img-fluid rounded-start" alt="..." />
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">{{ food.name }}</h4>

            <div class="quantity">
              <i class="bi bi-dash-circle-fill" @click="decraseItemHandler" />

              <p>{{ quantity }}</p>

              <i class="bi bi-plus-circle-fill" @click="addItemHandler" />
            </div>

            <p>{{ total }}</p>

            <button type="button" class="btn btn-danger" @click="deleteHandler">
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["food", "id"],

  computed: {
    quantity() {
      return this.food.qty;
    },
    total() {
      return parseInt(this.food.price * this.food.qty).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
    image() {
      return this.food.image;
    },
  },
  methods: {
    deleteHandler() {
      this.$store.dispatch("removeFromCart", {
        id: this.id,
        price: this.food.price,
        qty: this.food.qty,
      });
    },
    addItemHandler() {
      this.$store.dispatch("addToCart", {
        id: this.id,
      });
    },
    decraseItemHandler() {
      this.$store.dispatch("minusOneItem", {
        id: this.id,
      });
    },
  },
  watcher: {
    quantity() {
      console.log(quantity);
    },
  },
};
</script>

<style scoped>
.quantity i,
.quantity p {
  display: inline-block;
}

.quantity p {
  padding-left: 2rem;
  padding-right: 2rem;
}

.card {
  /* border: 2px solid #494449; */
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  /* background-image: url("../../assets/Order/lotus.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  /* https://www.w3schools.com/howto/howto_css_center-vertical.asp */
  margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.btn {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn:active,
.btn:focus {
  transform: translateY(-1px);
}

.food-card_order-count input {
  background: #f5f5f5;
  border-color: #f5f5f5;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-align: center;
}

.food-card_order-count {
  width: 5rem;
}
</style>
