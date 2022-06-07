<template lang="html">
  <select
    class="selectItemByPage button"
    v-model="itemsByPage"
    @change="setItemsByPage"
  >
    <option value="" disabled selected>Show</option>
    <option value="25">25</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>

  <div id="icon-top">
    <input
      class="button"
      id="searching"
      type="text"
      v-model="search"
      placeholder="Search"
      @input="searchFullText"
    />

    <div id="sort">
      <font-awesome-icon icon="arrow-up" class="icon" @click="sortPriceAsc" />
      <p>Price</p>
      <font-awesome-icon
        icon="arrow-down"
        class="icon"
        @click="sortPriceDESC"
      />
    </div>
    <div id="sort">
      <font-awesome-icon icon="arrow-up" class="icon" @click="sortRatingAsc" />
      <p>Rating</p>
      <font-awesome-icon
        icon="arrow-down"
        class="icon"
        @click="sortRatingDesc"
      />
    </div>

    <button class="button" @click="toggleMoreOption()">More Option</button>
  </div>
</template>
<script>
export default {
  name: "BaseSortOption",
  inject: ["toggleMoreOption"],
  methods: {
    sortPriceAsc() {
      return this.$store.commit("prods/setSort", {
        field: "price",
        order: "Asc",
      });
    },
    sortPriceDESC() {
      return this.$store.commit("prods/setSort", {
        field: "price",
        order: "Desc",
      });
    },
    sortRatingAsc() {
      return this.$store.commit("prods/setSort", {
        field: "rating",
        order: "Asc",
      });
    },
    sortRatingDesc() {
      return this.$store.commit("prods/setSort", {
        field: "rating",
        order: "Desc",
      });
    },
    searchFullText() {
      this.$store.commit("prods/setSearch", this.search);
    },
    setItemsByPage() {
      console.log("itemsbyPage", this.itemsByPage);
      this.$store.commit("prods/setItemsByPage", this.itemsByPage);
    },
  },
};
//utiliser pour cart et total//
</script>
<style scoped>
.button {
  margin-top: 0.5rem;
  height: 3rem;
}

#searching {
  width: 100%;
  height: 2rem;
  background-color: var(--mediumLightGrey);
  border-radius: 0.5rem;
  text-align: center;
}
#sort {
  font-size: 1rem;

  text-align: center;
  border-radius: 1rem;
  background-color: var(--mediumGrey);
  color: white;

  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset;
  border-width: 2px;
  border-style: outset;
  border-color: (rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
}
#sort:hover {
  background-color: var(--mediumLightGrey);
}

.icon :hover {
  color: var(--darkGrey);
}
#icon-top {
  display: flex;
  flex-direction: row;
}
</style>
