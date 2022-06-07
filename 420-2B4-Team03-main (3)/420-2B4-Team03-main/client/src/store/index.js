import { createStore } from "vuex";

import productsModule from "./modules/products";
import cartModule from "./modules/cart";
import authModule from "./modules/auth";

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
    auth: authModule,
  },
});
export default store;
