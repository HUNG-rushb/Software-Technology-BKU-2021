<template>
  <div>
    <main>
      <router-view />
    </main>

    <!-- <Progress /> -->
    <!-- <OrderGrid /> -->

    <!-- <Order /> -->
    <!-- <HomeMenu /> -->
    <!-- <AddToast /> -->
  </div>
</template>

<script>
import Order from "./views/Order.vue";

import OrderGrid from "./components/Order/OrderGrid.vue";
import HomeMenu from "./components/Home/HomeMenu.vue";

import Progress from "./components/Order/Progress.vue";

export default {
  components: { HomeMenu, Order, Progress, OrderGrid },
  data() {
    return {
      foods: [
        {
          id: "1",
          name: "Bún bò Huế",
          description:
            "Bún bò là một trong những đặc sản của xứ Huế, mặc dù món bún này phổ biến trên cả ba miền ở Việt Nam và cả người Việt tại hải ngoại.",
          img: "./assets/images/Food images/....",
        },
      ],
    };
  },
};
</script>

<style>
/* Import Bootstrap */
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-icons/font/bootstrap-icons.css";

/* Import Google Font  */
/* @import url("https://fonts.googleapis.com/css?family=Roboto:100,400,900");
@import url("https://fonts.googleapis.com/css?family=Anton");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700"); */
/* #8e9189, #494449, #857f74, #eeefeb, #ddeac1  */
* {
  box-sizing: border-box;
  /* display: block; */
}

html {
  height: 100%;
}

body {
  /* font-family: "Montserrat", sans-serif; */
  margin: 0;
  height: 100%;
}
</style>
