<template lang="html">
  <div class="facture">
    <h2>
      Thx
      {{ sale.delivery.fullname }}
      For your purchase of:

      <div v-for="item in sale.itemsCart" :key="item.name">
        <p>{{ item.quantity }} x {{ item.name }}</p>
      </div>

      <p>
        At: {{ sale.delivery.adress }} {{ sale.delivery.city }}
        {{ sale.delivery.province }} {{ sale.delivery.post }}
      </p>
      <p>For A total of {{ sale.total }} $</p>
    </h2>
  </div>
</template>
<script>
export default {
  name: "Bill",
  computed: {
    sale() {
      console.log(this.$store.state.cart.sale);
      return this.$store.state.cart.sale;
    },
  },
};
</script>
<style scoped>
.facture {
  margin-top: 10rem;
  text-align: center;
}
</style>
