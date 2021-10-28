<template>
  <div>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="../../assets/Order/bunbo.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <!-- Tên món và giới thiệu  -->
            <h4 class="card-title">Bún bò Huế</h4>

            <p class="card-text">
              Bún bò là một trong những đặc sản của xứ Huế, mặc dù món bún này
              phổ biến trên cả ba miền ở Việt Nam và cả người Việt tại hải
              ngoại.
            </p>

            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>

            <!-- https://shaack.com/projekte/bootstrap-input-spinner/ -->
            <input
              type="number"
              value="1"
              min="1"
              max="100"
              step="1"
              id="numberinput"
            />

            <!-- Delete Button  -->
            <button type="button" class="btn btn-danger">
              <i class="bi bi-trash-fill"> Bỏ chọn</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// $("input[type='number']").inputSpinner();

export default {};
</script>

<style scoped>
.card {
  border: 2px solid #494449;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  background-image: url("../../assets/Order/lotus.jpg");
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

/* #numberinput {
  
} */

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
