<template>
  <div>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="image" class="img-fluid rounded-start" alt="..." />
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <div class="card-title">{{ food.name }}</div>

            <div class="quantity">
              <i class="bi bi-dash-circle-fill" @click="decraseItemHandler" />

              <p>{{ quantity }}</p>

              <i class="bi bi-plus-circle-fill" @click="addItemHandler" />
            </div>

            <button type="button" class="btn btn-danger" @click="deleteHandler">
              <i class="bi bi-trash-fill" />
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
};
</script>

<style scoped>
.quantity i,
.quantity p {
  display: inline-block;
}

.quantity p {
  padding-left: 1rem;
  padding-right: 1rem;
}

.card {
  border: 2px solid #494449;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  /* background-image: url("../../assets/Order/lotus.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  font-size: 1rem;
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
</style>
