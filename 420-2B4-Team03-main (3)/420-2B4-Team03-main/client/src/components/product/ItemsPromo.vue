<template>
  <div class="promo-item">
    <div id="p-right">
      <div id="promo-img"><img :src="item.image" /></div>
    </div>
    <div id="p-left">
      <div id="l-top">
        <div id="promo-name">
          <h1>{{ item.name }}</h1>
          <Rating id="promo-rating" :modelValue="item.rating"></Rating>
        </div>
      </div>
      <div id="timer">
        <div id="l-middle">
          <p>{{ item.alcohol }} %</p>
          <p>{{ item.price.toFixed(2) }} $</p>
          <font-awesome-icon
            icon="cart-plus"
            id="add-cart-item"
            class="add-cart"
            v-on:click="addToCart"
          />
        </div>
        <Promotion :item="item"> </Promotion>
      </div>
    </div>
  </div>
</template>

<script>
import Promotion from "../ui/Promotion";
import Rating from "../ui/Rating";
export default {
  name: "ItemsPromo",
  props: ["item"],
  components: { Promotion, Rating },

  data() {},
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addToCart", {
        id: this.item.id,
        name: this.item.name,
        price: +(
          this.item.price -
          (this.item.price * this.item.discountPercentage) / 100
        ).toFixed(2),
        image: this.item.image,
        quantity: 1,
        alcohol: this.item.alcohol,
      });
      this.$store.dispatch("auth/updatedCurrentUser");
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: var(--mediumGrey);
}
.promo-item {
  background-color: var(--mediumLightGrey);
  border-radius: 1rem;
  color: var(--lightGrey);
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  width: 10rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  min-width: 25rem;
  min-height: 15rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
#promo-name {
  font-size: 8px;
}
#promo-rating {
  margin-bottom: 0.5rem;
  font-size: 12px;
}
#promo-img img {
  width: 4rem;
  height: 13rem;
}
#p-left {
  display: flex;
  flex-direction: column;
}
#p-right {
}
#l-top {
  border-top-left-radius: 0.25rem;
  background-color: var(--mediumGrey);
  color: var(--lightGrey);
  width: 20rem;
}
#l-middle {
  color: var(--darkGrey);
  display: flex;
  flex-direction: row;
  width: 20rem;
  justify-content: space-evenly;
}
#l-middle p {
  font-size: 1rem;
  font-weight: bold;
}
#l-bottom {
  font-size: 18px;
  font-weight: 1000;
}
#l-bottom p {
  color: var(--darkGrey);

  margin: 0;
}
#discount {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 20rem;
  margin-top: 0.5rem;
}
.add-cart {
  padding: 1rem;
}
#timer {
  color: red;
}
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #571515 0%,
    #8f2424 29%,
    #ff131f 67%,
    #f37847 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
