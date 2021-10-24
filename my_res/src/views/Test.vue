<template>
  <div>
    <GoogleMap />

    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>Món Việt</h3>
        <br />

        <img src="../assets/images/Footer/logo.webp" alt="..." /><br />

        <p class="footer-company-name">Món Việt ©2021</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="bi bi-shop-window"></i>
          <p><span>268 Lý Thường Kiệt</span>Quận 10, Thành phố Hồ Chí Minh</p>
        </div>

        <div>
          <i class="bi bi-telephone-fill"></i>
          <p>098 123 4567</p>
        </div>

        <div>
          <i class="bi bi-envelope-fill"></i>
          <!-- <p><a href="mailto:support@company.com">support@company.com</a></p> -->
          <p><a href="#">bku.edu.vn.com</a></p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span><h4>Về nhóm đồ án</h4></span>
          Đại học Bách Khóa TPHCM
        </p>

        <div class="footer-icons">
          <a href="#" class="social-icon-link bi-facebook"></a>
          <a href="#" class="social-icon-link bi-instagram"></a>
          <a href="#" class="social-icon-link bi-youtube"></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import GoogleMap from "./Google Map/GoogleMap.vue";
import GoogleMap from "../components/Layout/Google Map/GoogleMap.vue";

export default {
  components: { GoogleMap },
};
</script>

<style scoped>
/* @import url(
  https://fonts.googleapis.com/css?family=Open+Sans:400,
  500,
  300,
  700
); */

/* * {
  font-family: Open Sans;
} */

section {
  width: 100%;
  display: inline-block;
  background: #333;
  height: 50vh;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  text-decoration: underline;
}

.footer-distributed {
  background: #666;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 55px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

/* Footer left */
.footer-distributed .footer-left {
  width: 35%;
}

/* The company logo */
.footer-distributed h3,
.footer-distributed h2 {
  color: #ffffff;
  margin: 0;
}

.footer-distributed img {
  display: block;
  width: 45%;
  margin: 0;
}

.footer-distributed .footer-company-name {
  color: white;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
  width: 40%;
}

.footer-distributed .footer-center i {
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  font-weight: 400;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: lightseagreen;
  text-decoration: none;
}

.footer-distributed .footer-links a:before {
  content: "|";
  font-weight: 300;
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

/* Footer Right */

.footer-distributed .footer-right {
  width: 20%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;

  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
    justify-content: center;
  }

  .footer-distributed img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }
}
</style>
