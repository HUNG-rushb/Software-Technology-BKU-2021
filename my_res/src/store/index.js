import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
    // $store.state.counter
    itemCount: 0,
    username: "",
  },
  mutations: {
    insertItem(state) {
      state.itemCount++;
    },
    deleteItem(state) {
      state.itemCount--;
    },
    deleteUsername(state){
      state.username = "";
    }
  },
  getters: {
    finalItemCount(state) {
      return state.itemCount;
    },
    getUsername(state){
      return state.username;
    }
  },
  actions: {},
  modules: {},
});
