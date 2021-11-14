import { createStore } from "vuex";
import menu from "../firebase/getMenu";

const store = createStore({
  state: {


    isLoggedIn: false,
    username: "",

    
    items: [],
    total: 0,
    qty: 0,

  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;

      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          name: productData.name,
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }

      state.qty++;
      state.total += productData.price;

      console.log(state.items);
    },

    // removeProductFromCart(state, payload) {
    //   const prodId = payload.productId;
    //   const productInCartIndex = state.items.findIndex(
    //     (cartItem) => cartItem.productId === prodId
    //   );
    //   const prodData = state.items[productInCartIndex];
    //   state.items.splice(productInCartIndex, 1);
    //   state.qty -= prodData.qty;
    //   state.total -= prodData.price * prodData.qty;
    // },
  },

  actions: {
    addToCart(context, payload) {
      const prodId = payload.id;

      const product = menu.value.find((prod) => prod.id === prodId);

      context.commit("addProductToCart", product);
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
    products(state) {
      return state.items;
    },
    totalSum(state) {
      return state.total;
    },
    quantity(state) {
      return state.qty;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    username(state) {
      return state.username;
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

export default store;
