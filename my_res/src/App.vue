<template>
  <div>
    <router-view></router-view>

    <!-- <CartCard /> -->
    <!-- <Progress :length="13" /> -->
    <!-- <Register /> -->
  </div>
</template>

<script>
// import Test from "./views/Test.vue";
// import FoodCard from "./components/Menu/FoodCard.vue";
// import CartCard from "./components/Order/CartCard.vue";
// import Progress from "./components/Order/Progress.vue";
// import Register from "./components/Register/RegisterComp.vue"

export default {
  // components: { Register },
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
