import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Action-on-scroll
import AOS from "aos";
import "aos/dist/aos.css";

// Boostrap 5
import "bootstrap";

// miit plug in
import mitt from "mitt";

// Vue-ls
import Storage from "vue-ls";

const app = createApp(App);

const emitter = mitt();
app.provide("emitter", emitter);

// https://ahnaineabd.medium.com/how-to-use-aos-in-a-vue-project-6fdf4cb9f9fc
app.AOS = new AOS.init();

const options = {
  namespace: "vuejs__", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local", // storage name session, local, memory
};

app.use(Storage, options);

app.use(store).use(router);

router.isReady().then(() => {
  app.mount("#app");
});
