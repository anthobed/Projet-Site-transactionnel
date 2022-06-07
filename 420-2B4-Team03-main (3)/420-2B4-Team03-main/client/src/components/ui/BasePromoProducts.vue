<template lang="html">
  <div id="promo">
    <ItemsPromo
      v-for="item in getProductsPromo"
      :key="item.id"
      :item="item"
    ></ItemsPromo>
  </div>
</template>
<script>
import ItemsPromo from "../product/ItemsPromo.vue";
export default {
  name: "BasePromoProducts",
  components: {
    ItemsPromo,
  }, //TODO LOCK ET USE SCROLL HORIZONTAL
  mounted() {
    this.$store.dispatch("prods/getItemsPromo");
  },
  computed: {
    getProductsPromo() {
      return this.$store.getters["prods/getProductsPromo"];
    },
  },
  methods: {
    checkItemsPromo() {
      //this.$store.dispatch("prods/getItems");
    },
  },
};
</script>
<style scoped>
#promo {
  height: 18rem;
  padding: 1rem;
  display: flex;

  margin-top: 8rem;
  background-color: var(--lightGrey);

  justify-content: center;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
</style>
