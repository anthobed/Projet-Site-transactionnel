import router from "../../router/index.js";
import http from "../../http";
/* import cart from "./cart.js"; */

export default {
  namespaced: true,
  namespace: "auth",
  state: {
    user: { name: "", local: { email: "" }, payments: [], deliverys: [] },
    isLoading: false,
    isLoggedIn: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token"),
    errors: [],
  },
  getters: {},
  mutations: {
    fetchCurrentUserSuccess(state, user) {
      state.user = user;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.errors = [];
    },
    setCurrentUser(state, user) {
      state.user = user;
      console.log("state-user:", state.user);
    },
    setCurrentDelivery(state, delivery) {
      state.user.deliverys.push(delivery);
    },

    signinSuccess(state, data) {
      delete data.user.password;
      state.isLoading = false;
      state.errors = [];
      state.isLoggedIn = true;
      state.user = data.user;
      state.token = data.token;
      localStorage.setItem("token", data.token);
    },
    signupSuccess(state, user) {
      console.log(user);
      state.isLoading = false;
      state.errors = [];
    },
    signout(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
      localStorage.removeItem("token");
    },
    signError(state, errors) {
      console.log(typeof errors.response.data);
      state.isLoading = false;
      state.errors =
        typeof errors.response.data === "string"
          ? [errors.response.data]
          : errors.response.data;
    },
    setIsLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    async trySignin(context, credentials) {
      try {
        context.commit("setIsLoading", true);
        const response = await http.post("/api/auth/signin", credentials);
        context.commit("signinSuccess", response.data);
        //TODO Vérifier La Route
        await router.push("/Account");
      } catch (err) {
        context.commit("signError", err);
      }
    },
    async trySignup(context, user) {
      try {
        context.commit("setIsLoading", true);
        const newUser = await http.post("/api/users", user);
        context.commit("signupSuccess", newUser);
        await router.push("/SignIn");
      } catch (err) {
        context.commit("signError", err);
      }
    },
    async fetchCurrentUser(context) {
      try {
        context.commit("setIsLoading", true);
        const response = await http.get("/api/users/token");
        context.commit("fetchCurrentUserSuccess", response.data);
        context.rootState.cart.cart = response.data.itemsCart;
      } catch (err) {
        context.commit("setIsLoading", false);
        context.commit("signError", err);
      }
    },
    async updatedCurrentUser(context) {
      try {
        context.commit("setIsLoading", true);
        context.state.user.itemsCart = context.rootState.cart.cart;
        const response = await http.patch("/api/users", context.state.user);
        console.log("response", response.data);
        context.commit("fetchCurrentUserSuccess", response.data);
      } catch (err) {
        console.log("error", err);
        context.commit("setIsLoading", false);
        context.commit("signError", err);
      }
    },
    async updatedDelivery(context, payload) {
      console.log("payload update delivery", payload);
      await context.commit("setCurrentDelivery", payload);
    },
  },
  modules: {},
};
