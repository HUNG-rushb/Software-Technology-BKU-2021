import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
    // $store.state.counter
    itemCount: 0,
    isLoggedIn: false,
    username: "",
  },
  mutations: {
    insertItem(state) {
      state.itemCount++;
    },
    deleteItem(state) {
      state.itemCount--;
    },
    logIn(state){
      state.isLoggedIn = true;
    },
    logOut(state){
      state.isLoggedIn = false;
    },
    deleteUsername(state){
      state.username = "";
    }
  },
  getters: {
    finalItemCount(state) {
      return state.itemCount;
    },
    isAuthenticated(state){
      return state.isLoggedIn;
    },
    getUsername(state){
      return state.username;
    }
  },
  actions: {},
  modules: {},
});
