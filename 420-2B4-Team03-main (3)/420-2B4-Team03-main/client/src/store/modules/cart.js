//import axios from "axios";
import http from "../../http";

export default {
  namespaced: true,
  state: {
    cart: [],
    sale: {
      name: "",
      email: "",
      subtotal: "",
      qst: "",
      gst: "",
      shipping: "",
      total: "",
      itemsCart: [],
      delivery: {
        fullname: "",
        adress: "",
        phoneNumber: "",
        app: "",
        city: "",
        province: "",
        post: "",
      },
      payment: {
        numbercard: "",
        expirationMounth: "",
        expirationYear: "",
        ccv: "",
      },
    },
  },
  mutations: {
    setSale(state, payload) {
      state.sale = payload;
    },
  },

  getters: {
    products(state) {
      return state.cart;
    },
    getResults(state) {
      const amount = state.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);

      const shipping = amount == 0 ? 0 : amount < 200 ? 15 : 0;
      const subTotal = amount + shipping;
      const gst = subTotal * 0.05;
      const qst = subTotal * 0.09975;
      const total = subTotal + gst + qst;
      const facture = {
        total: total,
        amount: amount,
        shipping: shipping,
        gst: gst,
        qst: qst,
        subtotal: subTotal,
      };
      return facture;
    },
  },

  actions: {
    async addSale(context, payload) {
      const facture = context.getters["getResults"];

      const sale = context.state.sale;
      const user = payload;
      const newsale = {
        name: user.name,
        email: user.local.email,
        subtotal: facture.subtotal,
        qst: facture.qst,
        gst: facture.gst,
        shipping: facture.shipping,
        total: facture.total,
        itemsCart: context.state.cart,
        delivery: sale.delivery,
        payment: sale.payment,
      };

      const response = await http.post(
        "/api/sale",

        newsale
      );

      context.commit("setSale", response.data);
    },
    addToCart(context, payload) {
      const cart = context.state.cart;
      const product = cart.find((item) => item.id === payload.id);
      if (!product) {
        cart.push({
          ...payload,
        });
      } else {
        product.quantity += 1;
      }
    },
    add(context, payload) {
      const cart = context.state.cart;
      const product = cart.find((item) => item.id === payload.id);
      product.quantity += 1;
    },
    substract(context, payload) {
      const cart = context.state.cart;
      const product = cart.find((item) => item.id === payload.id);
      product.quantity -= 1;
    },
    remove(context, payload) {
      const cart = context.state.cart;
      const product = cart.find((item) => item.id === payload.id);
      cart.splice(cart.indexOf(product), 1);
    },
    setCurrentCart(state, payload) {
      console.log("payload set current cart", payload);
      state.cart = payload;
    },
  },
};
