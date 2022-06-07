<template lang="html">
  <base-card>
    <template v-slot:head>
      <BasePromoProducts></BasePromoProducts>
    </template>
  </base-card>
  <div class="content">
    <div class="content-cart">
      <h1>Cart</h1>
      <div v-for="item in cart.cart" :key="item.key">
        <ItemCart :item="item"></ItemCart>
      </div>
      <div>
        <Total> </Total>
      </div>
    </div>
  </div>
</template>

<script>
/* import ItemCart from "../components/cart/ItemCart.vue"; */
import Total from "../components/ui/Total.vue";
import ItemCart from "../components/cart/ItemCart.vue";
import BasePromoProducts from "../components/ui/BasePromoProducts.vue";

export default {
  name: "Cart",
  components: { Total, ItemCart, BasePromoProducts },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
.content-cart {
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  background-color: var(--lightGrey);
  border-radius: 1rem;
  padding: 0rem;
  margin: 0rem;
}
.content {
  margin-top: 1rem;
  justify-content: flex-start;
  align-items: center;
}
h1 {
  text-align: center;
  margin: 0rem;
  padding: 0rem;
}
h1 {
  background-color: var(--darkGrey);
}
</style>
