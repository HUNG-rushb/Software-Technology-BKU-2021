<template>
  <!-- data-aos="fade-right" -->
  <div>
    <nav
      class="navbar fixed-top navbar-expand-lg shadow-lg main-header"
      data-aos="fade-right"
    >
      <div class="container">
        <!-- LOGO -->
        <!-- <a router link></a> -->
        <router-link class="main-header__brand" to="/">
          <img src="../../assets/logo_final.png" alt="Món Việt" />
        </router-link>

        <!-- Brand name  -->
        <router-link class="main-header__brand" to="/">
          <strong>Món Việt</strong>
        </router-link>

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
              <!-- <a class="nav-link" href="#home">Trang chính</a> -->
              <router-link class="nav-link" to="/">Trang chính</router-link>
            </li>

            <li class="nav-item">
              <!-- <a class="nav-link" href="#menu">Menu</a> -->
              <router-link class="nav-link" to="/menu">Menu</router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#order">Đặt món</a>
              <!-- <router-link class="nav-link" to="/order">Đặt món</router-link> -->
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#book">Đặt bàn</a>
              <!-- <router-link to='/book'>Đặt bàn<router-link/> -->
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#contact">Liên hệ</a>
              <!-- <router-link class="nav-link" to="/contact">Liên hệ</router-link> -->
            </li>

            <li class="nav-item">
              <router-link class="btn" to="/login">
                <i class="bi bi-person-fill"></i> Đăng nhập
              </router-link>
            </li>

            <li class="nav-item" id="register">
              <router-link class="btn" to="/register">
                <i class="bi bi-person-plus-fill"></i> Đăng kí
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ShoppingCart from "./ShoppingCart.vue";
import CheckCart from "./CheckCart.vue";

export default {
  components: { ShoppingCart, CheckCart },
  methods: {},
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

/* #carticon {
  border: 1px solid #494449;

  right: 0;
} */

/* #register {
  right: 0;
} */

/* Highlight router link  */
a:hover,
a:active,
a.active {
  border-color: #f1a80a;
}
</style>
