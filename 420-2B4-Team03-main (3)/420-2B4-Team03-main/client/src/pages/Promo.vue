<template lang="html">
  <div id="content">
    <div v-if="getProductsPromo.lenght >= 0">
      <h2>Aucun produit en promotion présentement</h2>
    </div>
    <div v-else>
      <base-card-list>
        <template v-slot:item-list>
          <div v-for="item in getProductsPromo" :key="item.id">
            <Item :item="item"></Item>
          </div>
        </template>
      </base-card-list>
    </div>
  </div>
</template>
<script>
import Item from "../components/product/Item.vue";
export default {
  components: { Item },
  computed: {
    getProductsPromo() {
      return this.$store.getters["prods/getProductsPromo"];
    },
  },
}; //TODO rendre les fonction search etc utilisable partout!!!!
</script>
<style scoped>
#content {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  margin-top: 10rem;
  z-index: 10;
}
</style>
