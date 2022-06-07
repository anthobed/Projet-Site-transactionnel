<template lang="html">
  <div id="total">
    <div id="top">
      <div id="totalLeft">
        <p>Sub-Total:</p>
        <p>G.S.T:</p>
        <p>Q.S.T:</p>
        <p>Shipping:</p>
        <p>Total:</p>
      </div>
      <div>
        <!--refaire la structure -->

        <p>{{ getResults.amount.toFixed(2) }}$</p>
        <p>{{ getResults.gst.toFixed(2) }}$</p>
        <p>{{ getResults.qst.toFixed(2) }}$</p>
        <p>{{ getResults.shipping.toFixed(2) }}$</p>
        <p>{{ getResults.total.toFixed(2) }}$</p>
      </div>
    </div>

    <div id="footer">
      <router-link to="/cart/payment">
        <button class="button">Process</button>
      </router-link>
    </div>
  </div>
</template>
<script>
//import { mapGetters } from "vuex";

export default {
  name: "Total",

  computed: {
    //...mapGetters(["cart/getTotal"]),
    getResults() {
      return this.$store.getters["cart/getResults"];
    },
  },
};
</script>

<style scoped>
#footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
#top {
  display: flex;
  flex-direction: row;
}
.button {
  margin-bottom: 1rem;
  width: 10rem;
}
#totals h1 {
  font-size: 40px;
  text-align: center;
  margin: 0px;
  background-color: rgb(37, 37, 37);
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
p {
  font-weight: bold;
}
#total {
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
#totalLeft {
  width: 50%;
  text-align: left;
  margin-left: 10%;
}
#totalRigth {
  width: 50%;
  text-align: right;
  margin-right: 10%;
}
</style>
