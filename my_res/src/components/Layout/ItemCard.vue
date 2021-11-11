<template>
  <div>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="../../assets/logo.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">{{ food.name }}</h4>

            <div class="food-card_order-count">
              <div class="input-group mb-3">
                <input
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  value="1"
                  id="numberinput"
                  class="form-control input-manulator"
                />
                <!-- v-model="quantity" -->
              </div>
            </div>

            <!-- Delete Button  -->
            <button type="button" class="btn btn-danger">
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// $("input[type='number']").inputSpinner();

export default {
  props: ["food", "id"],
  data() {
    console.log(this.food);
    return {
      quantity: null,
    };
  },
};
</script>

<style scoped>
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
