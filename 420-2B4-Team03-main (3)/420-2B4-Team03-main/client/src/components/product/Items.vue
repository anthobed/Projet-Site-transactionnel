<template lang="html">
  <base-card-list>
    <template v-slot:item-list>
      <div v-for="item in getProducts" :key="item.id">
        <Item :item="item"></Item>
      </div>
    </template>
  </base-card-list>
</template>
<script>
import Item from "./Item.vue";
export default {
  name: "Items",

  components: {
    Item,
  },
  computed: {
    getProducts() {
      return this.$store.getters["prods/getProducts"];
    },
  },
  data() {
    return {
      search: "",
      itemsByPage: "",
    };
  },
  mounted() {
    this.itemsByPage = 20;
    this.$store.commit("prods/setItemsByPage", this.itemsByPage);
    //TODO:Probleme entre le scroll et le itembypage si je scroll apres loading de la page et ensuite je select itempbypage 25 il est a 5
    //et le scroll est fucktop genre selct + scroll ¸+ itembypaage
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    //TODO si l'item est en special afficher le montant du rabais et changer la couleur du prix en rouge(class animate-charcter)
    handleScroll() {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 100
      ) {
        console.log("newitemByPage on scroll", this.itemsByPage);
        this.$store.commit("prods/setProductShow", this.itemsByPage);
      }
    },
  },
};
</script>
<style>
h1 {
  background-color: var(--mediumGrey);
}
.items {
  display: flex;
  flex-direction: column;
  margin: 1rem;

  width: 100%;
  font-size: 25px;
  background-color: var(--lightGrey);
  border-radius: 1rem;
  color: white;
  text-align: center;
}

#item-list {
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  align-items: center;
  height: 100%;
}

#btn-backOnTop {
  max-width: 10rem;
}
#selectSale {
  display: flex;
  flex-direction: row;
  color: var(--darkGrey);
  font-size: 20px;
  font-weight: bold;
  padding: 0.5rem;
  justify-content: space-between;
  background-color: var(--LightGrey);
  align-items: center;
  margin-bottom: 0rem;
}
</style>
