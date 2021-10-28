import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Order from "../views/Order.vue";
import Error_404 from "../views/Menu.vue";
import Test from "../views/Test.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    components: { default: Home },
  },
  {
    path: "/menu",
    name: "Menu",
    components: { default: Menu },
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   components: { default: Login },
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   components: { default: Register },
  // },
  {
    path: "/order",
    name: "Order",
    components: { default: Order },
  },
  {
    path: "/error404",
    name: "Error_404",
    components: { default: Error_404 },
  },
  {
    path: "/test",
    name: "Test",
    components: { default: Test },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

export default router;
