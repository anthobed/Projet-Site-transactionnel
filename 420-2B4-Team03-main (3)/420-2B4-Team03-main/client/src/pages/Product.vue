<template lang="html">
  <div class="content">
    <div>
      <div id="container-item">
        <div id="left">
          <div id="top-img">
            <div>
              <h1>{{ item.name }}</h1>
            </div>
            <div>
              <Rating :modelValue="item.rating"> </Rating>
            </div>
          </div>

          <div class="img">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div id="price-abv">
            <h2>{{ item.alcohol }} %</h2>
            <h2>{{ +item.price }} $</h2>
          </div>
          <div id="bottom-img">
            <button class="button" @click="addToCart">Add to cart</button>

            <button class="button" @click="copyLink">Shared with friend</button>
          </div>
        </div>
        <div id="right">
          <div id="top-info">
            <div>
              <h2>Description</h2>
              <p>{{ item.description }}</p>
            </div>
          </div>
          <div id="bottom-info">
            <div>
              <h2>Food Pairing</h2>
              <ol>
                <li v-for="food in item.foodPairing" :key="food">
                  {{ food }}
                </li>
              </ol>
            </div>
            <div>
              <h2>Ingredients</h2>
              <ol>
                <li
                  v-for="ingredient in item.listOfIngredients"
                  :key="ingredient"
                >
                  {{ ingredient.name }},
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Rating from "../components/ui/Rating.vue";
export default {
  components: { Rating },
  computed: {
    item() {
      return this.$store.state.prods.product;
    },
  },

  mounted() {
    console.log("this.route", this.$route.params.id);
    this.$store.dispatch("prods/getItem", this.$route.params.id);

    console.log("item mounted", this.item);
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
    },
    copyLink() {
      alert(window.location.href);
    },
  },
};
</script>
<style scoped>
.content {
  justify-content: center;
  align-items: center;
}
.card {
}
.img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 10rem;
  height: 25rem;

  border-radius: 1rem;
}
h1 {
}
#container-item {
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  background: var(--lightGrey);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 1rem;
  width: 100vh;
  max-height: 100vh;
  margin: 0px;
  padding: 0px;
}
#left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--lightGrey);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset;
  border-radius: 1rem;
  width: 40%;
}
#right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  background-color: var(--lightGrey);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset;
  width: 60%;
}
.button {
  max-width: 15rem;
  max-height: 3rem;
}
#top-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--mediumGrey);
  border-radius: 1rem;
}
#bottom-img {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1rem;
  opacity: 0.8;
}
#price-abv {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
#bottom-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 75%;
}
ol {
  display: flex;
  flex-direction: row;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0%;
  padding: 0%;
}
h3 {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
