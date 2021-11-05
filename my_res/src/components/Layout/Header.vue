<template>
  <!-- data-aos="fade-right" fixed-top -->
  <div>
    <nav
      class="navbar fixed-top navbar-expand-lg shadow-lg main-header"
      data-aos="fade-right"
    >
      <div class="container-fluid">
        <router-link class="main-header__brand" to="/">
          <img src="../../assets/logo_final.png" alt="Món Việt" />
        </router-link>

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
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Trang chính</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/menu">Menu</router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#order">Đặt món</a>
              <!-- <router-link class="nav-link" to="/order">Đặt món</router-link> -->
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#contact">Liên hệ</a>
              <!-- <router-link class="nav-link" to="/contact">Liên hệ</router-link> -->
            </li>
          </ul>

          <form>
            <router-link class="btn" to="/login" id="login">
              <i class="bi bi-person-fill"></i> Đăng nhập
            </router-link>

            <router-link class="btn" to="/register" id="register">
              <i class="bi bi-person-plus-fill"></i> Đăng kí
            </router-link>

            <button class="btn btn-danger">
              <!-- <i class="bi bi-person-plus-fill" v-if ></i> Đăng xuất -->
              <i class="bi bi-box-arrow-right" id="logout"></i> Đăng xuất
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
#login {
  background-color: #a4dd8e;
  color: #ffffff;
  font-size: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
}

#login:hover {
  background-color: #ffffff;
  color: #a4dd8e;
  border: 1px solid #a4dd8e;
}

#register {
  background-color: #a4dd8e;
  color: #ffffff;
  font-size: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
}

#register:hover {
  background-color: #ffffff;
  color: #a4dd8e;
  border: 1px solid #a4dd8e;
}

/* #space {
  padding: 0 3rem 0 3rem;
} */
/* ------------------------------------- */
/* ------------------------------------- */
/* ------------------------------------- */
/* ------------------------------------- */
.main-header {
  color: #494449;
  font-size: 1rem;
}

/* Brand  */
.main-header__brand {
  text-decoration: none;
  color: #494449;
  font-size: 1.3rem;
  font-weight: bold;
  padding-right: 4rem;
  text-align: center;
}

.main-header__brand img {
  height: 2.8rem;
  vertical-align: middle;
}

/* Navbar  */
.navbar {
  background-image: linear-gradient(to bottom right, #ddeac1, #8e9189);
}

.navbar-toggler {
  background-color: white;
}

.nav-item {
  margin: 0;
}

.nav-item a {
  font-weight: bold;
  padding: 0;
}

.nav-item a:hover,
.nav-item a:active {
  color: #eb4e1e;
  border-bottom: 2.5px solid #eb4e1e;
}

.nav-link {
  color: #494449;
}

.btn {
  font-weight: bold;
  margin: 0.2rem;
  margin-left: 0.3rem;
}

li {
  text-align: center;
}
</style>
