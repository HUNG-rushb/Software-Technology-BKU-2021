<template>
  <div data-aos="fade-right">
    <header class="main-header">
      <nav class="navbar navbar-expand-lg shadow-lg">
        <div class="container">
          <!-- LOGO -->
          <!-- <a router link></a> -->
          <a href="" class="main-header__brand">
            <img src="../../assets/logo_final.png" alt="Món Việt" />
            <!-- <strong>Món Việt</strong> -->
          </a>
          <!-- Brand name  -->
          <a class="main-header__brand" href="#">
            <strong>Món Việt</strong>
          </a>

          <!-- Toggle button for smartphone screen  -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <!-- <span class="navbar-toggler-icon"></span> -->
            <i class="bi bi-chevron-compact-down"></i>
          </button>

          <!-- Navigation bar  -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto" id="navbar">
              <!-- active  -->
              <li class="nav-item">
                <a class="nav-link" href="#home">Trang chính</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#menu">Menu</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#order">Đặt món</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#book">Đặt bàn</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#contact">Liên hệ</a>
              </li>

              <li class="nav-item" id="carticon">
                <button class="btn">Giỏ hàng <ShoppingCart /></button>
              </li>

              <li class="nav-item">
                <button type="button" class="btn btn-success">
                  <i class="bi bi-person-fill"></i> Đăng nhập
                </button>
              </li>

              <li class="nav-item" id="register">
                <button type="button" class="btn">
                  <i class="bi bi-person-plus-fill"></i> Đăng kí
                </button>
              </li>
            </ul>
          </div>

          <!-- ----  -->
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import ShoppingCart from "./ShoppingCart.vue";

export default {
  components: { ShoppingCart },
};
</script>

<style scoped>
/* #8e9189, #494449, #857f74, #eeefeb, #ddeac1 */
.main-header {
  color: #494449;
}

/* Brand  */
.main-header__brand {
  /* color: #0e4f1f; */
  text-decoration: none;
  color: #494449;
  font: 3rem;
  font-weight: bold;
}

.main-header__brand img {
  height: 3rem;
  vertical-align: middle;
}

/* Navbar  */
.navbar {
  /* background-color: #ddeac1; */
  background-image: linear-gradient(to bottom right, #ddeac1, #8e9189);
}

.navbar-toggler {
  background-color: white;
}

.collapse {
  justify-content: right;
}

.navbar-nav {
  margin: 0;
  padding: 0;
  align-items: center;
  /* list-style: none;
  display: flex; */
}

.nav-item {
  margin: 0 0;
}

.nav-item a {
  font-weight: bold;
  padding: 0;
  /* border-bottom: 2.5px solid #494449; */
}

.nav-item a:hover,
.nav-item a:active {
  color: #494449;
  border-bottom: 2.5px solid #494449;
}

.nav-link {
  color: #494449;
}

.main-nav {
  display: none;
}

.btn {
  font-weight: bold;
  margin: 0.2rem;
  margin-left: 0.3rem;
}

.btn:hover {
  background-color: #494449;
  color: #ddeac1;
}

#carticon {
  border: 1px solid #494449;
  /* margin-right: 8rem; */
  right: 0;
}

#register {
  right: 0;
}
</style>
