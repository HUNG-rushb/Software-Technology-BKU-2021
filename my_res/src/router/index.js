import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ResetAccount from "../views/ResetAccount.vue"
import Menu from "../views/Menu.vue";

import Order from "../views/Order.vue";
import YourCart from "../components/Order/YourCart.vue";
import Destination from "../components/Order/Destination.vue";
import ConfirmOrder from "../components/Order/ConfirmOrder.vue";

import Error_404 from "../views/Page_404.vue";
import Test from "../views/Test.vue";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    components: { default: Home },
  },
  {
    path: "/menu",
    name: "Menu",
    components: { default: Menu },
  },
  {
    path: "/login",
    name: "Login",
    components: { default: Login },
  },
  {
    path: "/register",
    name: "Register",
    components: { default: Register },
  },
  {
    path: "/resetaccount",
    name: "ResetAccount",
    components: { default: ResetAccount },
  },
  {
    path: "/order",
    name: "Order",
    components: { default: Order },
    children: [
      {
        name: "cart",
        path: "/order/cart",
        component: YourCart,
      },
      {
        name: "destination",
        path: "/order/destination",
        component: Destination,
      },
      {
        name: "confirm",
        path: "/order/confirm",
        component: ConfirmOrder,
      },
    ],
  },
  { path: "/:notFound(.*)", component: Error_404 },
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
