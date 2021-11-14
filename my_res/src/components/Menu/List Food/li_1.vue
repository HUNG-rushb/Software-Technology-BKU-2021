<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <img src="../../../assets/images/FoodImages/banh_canh.jpg" />
        <h3>Combo A</h3>
        <h3>55.000 đ</h3>
        <h5>Bánh Canh <br />+ 1 Nước Cam Vắt</h5>

        <div>
          <button class="custom">Tùy Chỉnh</button>
          <button class="buy">Mua ngay</button>
        </div>
      </div>

      <div class="col-sm-4">
        <img src="../../../assets/images/FoodImages/banh_da_cua.jpg" />
        <h3>Combo B</h3>
        <h3>45.000 đ</h3>
        <h5>Bánh Đa Cua <br />+1 Chanh Dây</h5>

        <div>
          <button class="custom">Tùy Chỉnh</button>
          <button class="buy">Mua ngay</button>
        </div>
      </div>
      <div class="col-sm-4">
        <img src="../../../assets/images/FoodImages/bun_bo_hue.jpg" />
        <h3>Combo C</h3>
        <h3>65.000 đ</h3>
        <h5>Bún bò Huế<br />+1 Sữa Tươi</h5>
        <div>
          <button class="custom">Tùy Chỉnh</button>
          <button class="buy">Mua ngay</button>
        </div>
      </div>
      <div class="col-sm-4">
        <img src="../../../assets/images/FoodImages/bun_ca_hn.jpg" />
        <h3>Combo D</h3>
        <h3>40.000 đ</h3>
        <h5>Bún Cá Hà Nội<br />+1 Mước Sâm</h5>
        <div>
          <button class="custom">Tùy Chỉnh</button>
          <button class="buy">Mua ngay</button>
        </div>
      </div>
      <div class="col-sm-4">
        <img src="../../../assets/images/FoodImages/bun_cha_hn.jpg" />
        <h3>Combo E</h3>
        <h3>65.000 đ</h3>
        <h5>Bún Chả Hà Nội<br />+1 Trà Đào</h5>
        <div>
          <button class="custom">Tùy Chỉnh</button>
          <button class="buy">Mua ngay</button>
        </div>
      </div>
      <div class="col-sm-4">
        <img src="../../../assets/images/FoodImages/com_tam.jpg" />
        <h3>Combo Super</h3>
        <h3>80.000 đ</h3>
        <h5>Cơm Tấm (Sườn,Bì,Chả)<br />+1 Pepsi</h5>
        <div>
          <button class="custom">Tùy Chỉnh</button>
          <button class="buy">Mua ngay</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.col-sm-4 {
  text-align: center;
  border: 10px solid white;
}
img {
  width: 225px;
  height: 170px;
}
.row {
  margin: 50px;
  padding: 0px;
  border: 10px solid white;
  border-radius: 25px;
}
.custom {
  background-color: white;
  font-weight: 600;
  margin: 20px;
  border-radius: 5px;
  height: 40px;
  width: 100px;
}
.buy {
  background-color: #145a32;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  height: 40px;
  width: 100px;
}
</style>
