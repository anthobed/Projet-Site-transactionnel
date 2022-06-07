<template lang="html">
  <div id="item-container">
    <router-link :to="'/product/' + item.id">
      <div id="one">
        <h1>{{ item.name }}</h1>

        <Rating :modelValue="item.rating"> </Rating>
      </div>
      <div id="two"><img id="img-item" :src="item.image" /></div>
    </router-link>

    <div id="tree"></div>

    <div id="four">
      <p>{{ item.alcohol }} %</p>

      <p id="price">{{ item.price.toFixed(2) }} $</p>

      <font-awesome-icon
        icon="cart-plus"
        id="add-cart-item"
        class="add-cart"
        v-on:click="addToCart"
      />
    </div>
  </div>
</template>
<script>
//import { mapMutations } from "vuex";
//import Promotion from "../ui/Promotion";
import Rating from "../ui/Rating";
export default {
  components: { Rating },
  name: "Item",
  props: ["item"],
  data() {
    return {
      dateNow: new Date(Date.now()),
    };
  },
  computed: {
    checkIfPromo() {
      if (this.item.featuredExpiration > this.dateNow) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    checkIfPromo() {
      console.log("checkIfPromo value changed", this.item);
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addToCart", {
        id: this.item.id,
        name: this.item.name,
        price: +this.item.price,
        image: this.item.image,
        quantity: 1,
        alcohol: this.item.alcohol,
      });
      this.$store.dispatch("auth/updatedCurrentUser");
    }, //TODO si item est en promo faire changer le prix en rouge avec % de rabais et le prix et price apres escount
  },
};
</script>
<style scoped>
#item-container {
  display: flex;
  flex-direction: column;
  margin: 0.75rem;
  width: 16rem;
  height: 22rem;
  max-width: 16rem;
  max-height: 22rem;
  background-color: var(--mediumLightGrey);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 1rem;
  font-size: 15px;
}

#img-item {
  width: 4rem;
  height: 13rem;
}
#select-count {
  font-size: 15px;
  width: fit-content;
  flex-direction: row-reverse;
  text-align: center;
  color: var(--darkGrey);
  background-color: var(--lightGrey);
}
#one {
  color: var(--darkGrey);
  background-color: var(--mediumGrey);
  min-height: 4rem;
  max-height: 4rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}
#one h1 {
  justify-content: center;
  font-size: 13px;
  color: var(--lightGrey);
}
p {
  margin: 0;
}
#two {
  padding: 0.5rem;
  background-color: var(--mediumLightGrey);
}
#tree {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: -6rem;
  padding: 0.5rem;
  opacity: 0.8;
}
#promotion {
  top: -6rem;
  left: 4.75rem;
  background-color: var(--lightGrey);
  position: relative;
  border-radius: 0.25rem;
}
#discount-item {
  display: none;
}
#four {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  top: -1rem;
  background-color: var(--lightMediumGrey);
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  width: 100%;
}
#price {
  margin-top: 2rem;
}
p {
  color: var(--darkGrey);
  font-size: 15px;
  font-weight: bold;
}
#l-bottom {
  display: flex;
  flex-direction: column;
}
#discount {
  display: flex;
  flex-direction: row;
}
h2 {
  font-size: 10px;
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
    background-position: 100% center;
  }
}
</style>
