import { createStore } from "vuex";
import menu from "../firebase/getMenu";

const store = createStore({
  state: {
    // isLoggedIn: false,
    items: [],
    total: 0,
    qty: 0,
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;

      const productInCartIndex = state.items.findIndex(
        (ci) => ci.id === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          name: productData.name,
          id: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }

      state.qty++;
      state.total += parseInt(productData.price);
    },

    minusOneFood(state, payload) {
      const productData = payload;

      const productInCartIndex = state.items.findIndex(
        (ci) => ci.id === productData.id
      );

      if (state.items[productInCartIndex].qty === 1) {
        return;
      } else {
        state.items[productInCartIndex].qty--;
        state.qty--;
        state.total -= parseInt(productData.price);
      }
    },

    removeProductFromCart(state, payload) {
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.id === payload.id
      );

      const prodData = state.items[productInCartIndex];

      state.items.splice(productInCartIndex, 1);

      state.qty -= prodData.qty;

      state.total -= parseInt(
        parseInt(prodData.price) * parseInt(prodData.qty)
      );
    },
  },

  actions: {
    addToCart(context, payload) {
      // const prodId = payload.id;

      const product = menu.value.find((prod) => prod.id === payload.id);

      context.commit("addProductToCart", product);
    },

    minusOneItem(context, payload) {
      // const prodId = payload.id;

      const product = menu.value.find((prod) => prod.id === payload.id);

      context.commit("minusOneFood", product);
    },

    removeFromCart(context, payload) {
      context.commit("removeProductFromCart", payload);
    },
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
  },
});

export default store;
