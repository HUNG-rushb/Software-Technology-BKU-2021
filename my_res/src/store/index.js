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
    updateUsername(state, payload){
      state.username = payload;
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
  actions: {
    logIn(context, payload){
      context.commit("logIn");
      context.commit("updateUsername", payload);
    },

    logOut(context){
      context.commit("logOut");
      context.commit("deleteUsername");
    }
  },
  modules: {},
});
