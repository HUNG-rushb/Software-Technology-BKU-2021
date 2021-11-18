<template>
  <div>
    <main>
      <router-view v-slot="slotProps">
        <transition name="fade" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$ls.set("selectedFood", [], 60 * 60 * 1000);
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
