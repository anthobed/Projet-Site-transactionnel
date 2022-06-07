<template lang="html">
  <base-card>
    <template v-slot:head>
      <BasePromoProducts></BasePromoProducts>
    </template>
  </base-card>
  <div class="content">
    <base-card>
      <template v-slot:main>
        <div id="store">
          <div id="search" v-if="isShow">
            <SearchBar></SearchBar>
          </div>

          <Items :items="items"> </Items>

          <div class="cart" v-if="cart.cart.length > 0">
            <base-card-cart>
              <template v-slot:header>
                <h1>Cart</h1>
              </template>
            </base-card-cart>

            <div v-for="item in cart.cart" :key="item.key">
              <base-card-cart>
                <template v-slot:item>
                  <ItemCart :item="item"></ItemCart
                ></template>
              </base-card-cart>
            </div>
            <base-card-cart>
              <template v-slot:calculate><Total> </Total></template>
            </base-card-cart>
          </div>
        </div>
      </template>
    </base-card>
  </div>

  <base-card>
    <template v-slot:footer> </template>
  </base-card>
</template>

<script>
// Ma chercher les Elements pour le
//import Header from "../components/nav/Header.vue";
//import Footer from "../components/nav/Footer.vue";
import Total from "../components/ui/Total.vue";
import ItemCart from "../components/cart/ItemCart.vue";
import Items from "../components/product/Items.vue";
import BasePromoProducts from "../components/ui/BasePromoProducts.vue";

import SearchBar from "../components/ui/SearchBar.vue";

export default {
  name: "Store",
  components: {
    Total,
    ItemCart,
    Items,
    SearchBar,
    BasePromoProducts,
  },
  data() {
    return {
      itemInCart: 0,
      showCart: false,
      isShow: false,
      index: null,
      itemsPromo: 0,
    };
  },
  mounted() {
    this.$store.dispatch("prods/getItems");
  },
  computed: {
    //TODO changer le map pour  getCart!
    cart() {
      return this.$store.state.cart;
    },
    getProducts() {
      return this.$store.getters["prods/getProducts"];
    },
  },
  /*  watch: {
    getProductsPromo() {
      //TODO comment reload les items quand le timer est fini????
      return this.$store.getters["prods/getProductsPromo"];
    },
    getProducts() {
      return this.$store.getters["prods/getProducts"];
    },
  }, */
  provide() {
    return {
      //quand on import pas besoin de provide
      itemInCart: this.itemInCart,
      toggleMoreOption: this.toggleMoreOption,
    };
  },

  methods: {
    toggleMoreOption() {
      this.isShow = !this.isShow;
    },
    backOnTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 1rem;
}
#content-main {
  display: flex;
  flex-direction: row;
}
#store {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  margin: 0rem;
  padding: 1rem;
  z-index: 10;
}

#items h1 {
  font-size: 40px;
  background-color: var(--darkGrey);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
}
#search {
  flex-grow: 1;
  flex-shrink: 0;

  background-color: rgb(221, 221, 221);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  text-align: center;
  max-width: 20rem;
}
.cart {
  flex-grow: 0;
  flex-shrink: 1;
  width: auto;

  border-radius: 0.5rem;
  margin: 0;
  padding: 0rem;
  background-color: var(--lightGrey);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
</style>
