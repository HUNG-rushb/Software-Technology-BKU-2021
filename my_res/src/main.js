import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import { createStore } from "vuex";

// Action-on-scroll
import AOS from "aos";
import "aos/dist/aos.css";

// Boostrap 5
import "bootstrap";

import mitt from "mitt";

const app = createApp(App);

const emitter = mitt();
app.provide("emitter", emitter);

// https://ahnaineabd.medium.com/how-to-use-aos-in-a-vue-project-6fdf4cb9f9fc
app.AOS = new AOS.init();

// Vuex
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },

  mutations: {
    increment(state) {
      state.counter += 1;
      // this.$store.commit('increment')
    },
    // this.$store.commit('increment', payload)
    // this.$store.commit({
    // type: 'increase',
    // value:10})
  },

  getters: {
    finalCounter(state) {
      return state.counter;
      // invoke
      // return this.$store.gettters.finlcounter
    },
  },
});

app
  .use(store)
  .use(router)
  .mount("#app");
