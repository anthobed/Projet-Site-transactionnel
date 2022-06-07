<template lang="html">
  <div id="option-container">
    <h1>Option</h1>

    <div id="search-option">
      <label>Category :</label>
      <select
        class="selectItemByPage"
        v-model="selectCategory"
        @change="setFilterCategory"
      >
        <option value="" disabled selected>Category</option>
        <option value="IPA">IPA</option>
        <option value="Stout">Stout</option>
        <option value="Pilsner">Pilsner</option>
        <option value="Ale">Ale</option>
        <option value="Pale Ale">Pale Ale</option>
      </select>
      <label>ABV :</label>
      <select
        class="selectItemByPage"
        v-model="selectAbv"
        @change="setFilterAbv"
      >
        <option value="" disabled selected>ABV</option>
        <option value="5.0">0% - 5%</option>
        <option value="10.0">6% - 10%</option>
        <option value="15.0">11% - 15%</option>
      </select>
      <label>Rating :</label>
      <RatingSelect
        id="rating-select"
        v-model="ratings"
        @click="setFilterRating"
      >
      </RatingSelect>
    </div>
  </div>
</template>
<script>
import RatingSelect from "../ui/RatingSelect";
export default {
  name: "SearchBar",
  components: { RatingSelect },

  data() {
    return {
      rating: null,
      selectCategory: "",
      selectAbv: "",
      ratings: 0,
    };
  },

  methods: {
    setFilterCategory() {
      this.$store.commit("prods/setFilter", {
        field: "category",
        value: this.selectCategory,
      });
    },
    setFilterAbv() {
      this.$store.commit("prods/setFilter", {
        field: "alcohol",
        value: this.selectAbv,
      });
    },
    setFilterRating() {
      console.log("Rating dans setFilterRating ", this.ratings);
      this.$store.commit("prods/setFilter", {
        field: "rating",
        value: this.ratings,
      });
    },
  },

  //TODO:Setup Rating option onClick to filter ratingBy Stars
};
</script>
<style scoped>
#option-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#rating-select {
  font-size: 1.75rem;
  margin-top: 0rem;
}
#search-option {
  display: flex;
  flex-direction: column;
  width: 18rem;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}

#search h1 {
  width: 100%;
  font-size: 2rem;
  background-color: rgb(37, 37, 37);
  margin: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
}
#search label {
  font-size: 20px;
  margin: 0.5rem;
}
#search select {
  width: 70%;
  height: 3rem;
  font-size: 15px;
  text-align: center;
  margin: 0px;
  margin-bottom: 0px;
  border-radius: 0.5rem;
}

#search input {
  width: 70%;
  font-size: 20px;
  margin: 0px;
  margin-bottom: 0px;
  border-radius: 0.5rem;
}
.selectItemByPage {
  margin-left: 2rem;
  width: 10rem;
  height: 3rem;
  color: var(--darkGrey);
  background-color: var(--mediumGrey);
  font-size: 20px;
  font-weight: bold;
}
</style>
