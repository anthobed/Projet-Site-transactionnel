import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

import SignIn from "../pages/SignIn.vue";
import Home from "../pages/Home.vue";
import SignUp from "../pages/SignUp.vue";
import Cart from "../pages/Cart.vue";
import Products from "../pages/Products.vue";
import Product from "../pages/Product.vue";
import Promo from "../pages/Promo.vue";
import Payment from "../pages/Payment.vue";
import Account from "../pages/Account.vue";
import NotFound from "../pages/NotFound.vue";
import Bill from "../pages/Bill.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/signin",
      component: SignIn,
      beforeEnter(to, from, next) {
        if (store.state.auth.isLoggedIn == false) {
          next();
        } else {
          router.push("/");
        }
      },
    },
    {
      path: "/signup",
      component: SignUp,
      beforeEnter(to, from, next) {
        if (store.state.auth.isLoggedIn == false) {
          next();
        } else {
          router.push("/");
        }
      },
    },

    {
      path: "/cart",
      component: Cart,
      beforeEnter(to, from, next) {
        if (store.state.auth.isLoggedIn == true) {
          next();
        } else {
          router.push("/signin");
        }
      },
    },
    {
      path: "/cart/payment",
      component: Payment,
      beforeEnter(to, from, next) {
        if (store.state.auth.isLoggedIn == true) {
          next();
        } else {
          router.push("/signin");
        }
      },
    },
    {
      path: "/products",
      component: Products,
      beforeEnter(to, from, next) {
        if (store.state.auth.isLoggedIn == true) {
          next();
        } else {
          router.push("/signin");
        }
      },
    },
    {
      path: "/product/:id",
      component: Product,
      props: true,
      beforeEnter(to, from, next) {
        if (store.state.auth.isLoggedIn == true) {
          next();
        } else {
          router.push("/signin");
        }
      },
    },
    {
      path: "/promo",
      component: Promo,
      beforeEnter(to, from, next) {
        if (store.state.auth.isLoggedIn == true) {
          next();
        } else {
          router.push("/signin");
        }
      },
    },
    {
      path: "/account",
      component: Account,
      beforeEnter(to, from, next) {
        if (store.state.auth.isLoggedIn == true) {
          next();
        } else {
          router.push("/signin");
        }
      },
    },
    {
      path: "/cart/payment/bill",
      component: Bill,
      beforeEnter(to, from, next) {
        if (store.state.auth.isLoggedIn == true) {
          next();
        } else {
          router.push("/signin");
        }
      },
    },
    //TODO Sa marche pas
    { path: "/:notfound(.*)", component: NotFound },
  ],
});

export default router;
