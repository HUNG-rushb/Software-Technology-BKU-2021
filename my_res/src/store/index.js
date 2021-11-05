import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
    // $store.state.counter
    itemCount: 0,
  },
  mutations: {
    insertItem(state) {
      state.itemCount++;
    },
    deleteItem(state) {
      state.itemCount--;
    },
  },
  getters: {
    finalItemCount(state) {
      return state.itemCount;
    },
  },
  actions: {},
  modules: {},
});
