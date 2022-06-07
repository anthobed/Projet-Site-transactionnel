<template lang="html">
  <div class="payment">
    <div class="left">
      <Shipping></Shipping>
    </div>
    <div class="right">
      <div>
        <PaymentCart> </PaymentCart>
      </div>
      <router-link to="/cart/payment/bill">
        <div class="paybutton">
          <button class="button" @click="addsale()">Pay</button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Shipping from "../components/payment/Shipping.vue";
import PaymentCart from "../components/payment/PaymentCart.vue";
export default {
  name: "Payment",
  components: { Shipping, PaymentCart },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    sale() {
      return this.$store.state.cart.sale;
    },
  },
  methods: {
    async addsale() {
      await this.$store.dispatch("cart/addSale", this.user);
      await this.$store.dispatch("auth/fetchCurrentUser");
    },
  },
};
</script>

<style scoped>
h1 {
  color: var(--lightGrey);
  text-align: center;
}
.payment {
  margin-top: 6rem;
  display: flex;
  flex-direction: row;
  height: 100%;
}
.left {
  margin: 3rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  width: 50%;
}
.right {
  display: flex;
  flex-direction: column;
  margin: 3rem;

  height: 20%;

  width: 50%;
}
.paybutton {
  text-align: center;
  margin: 0;
  padding: 0;
}
button {
  margin: 0.5rem;
  border-radius: 20px;
  border: 1px solid var(--mediumLightGrey);
  background-color: var(--darkGrey);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
button:hover {
  cursor: pointer;
  color: var(--darkGrey);
  background-color: var(--mediumLightGrey);
  outline: none;
}
h1 {
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  background-color: var(--darkGrey);
  margin: 0px;
}
label {
  color: var(--darkGrey) bold;
}
input {
  border-radius: 3px;
  border: 2px solid var(--mediumLightGrey);
  background-color: var(--mediumLightGrey);
  padding: 12px 15px;
  margin: 8px 0;

  width: 100%;
}
select {
  border-radius: 3px;
  border: 2px solid var(--mediumLightGrey);
  background-color: var(--mediumLightGrey);
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}
label {
  font-size: 15px;
  font-weight: bold;
}
.container01 {
  width: 100%;
  text-align: center;

  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
}
.container3 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 0.75rem;
}
.container2 {
  margin: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
