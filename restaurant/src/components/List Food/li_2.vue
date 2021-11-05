<template>
  <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img src="../../../assets/bun_bo_hue.jpg" />
          <h3> Combo cặp đôi</h3>
          <h3> 120.000 đ</h3>
          <h5>2 Bún bò <br/>+2 Sữa Tươi</h5>
          <div>
            <button class="custom">Tùy Chỉnh</button>
            <button class="buy">Mua ngay</button>
          </div>
          </div>
        <div class="col-sm-4">
          <img src="../../../assets/bun_cha_hn.jpg" />
          <h3> Combo bộ ba</h3>
          <h3> 180.000 đ</h3>
          <h5>3 Bún Chả Hà Nội <br/>+3 Trà Đào</h5>
          <div>
            <button class="custom">Tùy Chỉnh</button>
            <button class="buy">Mua ngay</button>
          </div>
        </div>
        <div class="col-sm-4">
          <img src="../../../assets/pho.jpg" />
          <h3> Combo bộ tứ</h3>
          <h3> 232.000 đ</h3>
          <h5>4 Phở Bò<br/>+4 Cocacola</h5>
          <div>
            <button class="custom">Tùy Chỉnh</button>
            <button class="buy">Mua ngay</button> 
          </div>
      </div>
        <div class="col-sm-4">
          <img src="../../../assets/hu_tieu.jpg" />
          <h3> Combo 5 - 10 người</h3>
          <h3> 400.000 đ</h3>
          <h5> 1 Hủ Tiếu Đặc Biệt Size XL<br/>+2 Trà Xanh Size XL </h5>
          <div>
            <button class="custom">Tùy Chỉnh</button>
            <button class="buy">Mua ngay</button>
          </div>
          </div>
        <div class="col-sm-4">
          <img src="../../../assets/mi_quang.jpg" />
          <h3> Combo 10 người trở lên</h3>
          <h3> 690.000 đ</h3>
          <h5> 3 Mì Quảng Size XL<br/>+3 Sữa Tươi XL(free)</h5>
          <div>
            <button class="custom">Tùy Chỉnh</button>
            <button class="buy">Mua ngay</button>
          </div>
        </div>
        <div class="col-sm-4">
          <img src="../../../assets/tra_dao.jpg" />
          <h3> Combo Nước </h3>
          <h3> 40.000 đ</h3>
          <h5>3 Trà Đào trở lên<br/>&nbsp;</h5>
          <div>
            <button class="custom">Tùy Chỉnh</button>
            <button class="buy">Mua ngay</button> 
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.col-sm-4{
  text-align: center;
  border : 10px solid white;
}
img{
  width: 225px;
  height: 170px;
}
.row{
  margin: 50px;
  padding: 0px;
  border : 10px solid white ;
  border-radius: 25px;
}
.custom{
  background-color: white;
  font-weight: 600;
  margin: 20px;
  border-radius: 5px;
  height: 40px;
  width: 100px;
}
.buy{
  background-color: #145A32;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  height: 40px;
  width: 100px;
}
</style>