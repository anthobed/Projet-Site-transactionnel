<template lang="html">
  <div class="container">
    <div id="app-one">
      <Header></Header>
    </div>
    <div id="app-two">
      <router-view> </router-view>
    </div>

    <div id="app-three">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/nav/Header.vue";
import Footer from "./components/nav/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showHome: false,
      showBubbleAndLogo: true,
    };
  },
  computed: {
    /* ...mapState("auth", ["token"]), */
    token() {
      return this.$store.state.auth.token;
    },
  },
  beforeMount() {
    if (this.token) {
      console.log("Token:", this.token);
      this.$store.dispatch("auth/fetchCurrentUser");
      //this.$store.dispatch("cart/setCurrentCart");
      console.log("User:", this.$store.state.auth.user);
    }
  },

  methods: {
    toggleStore() {
      this.showHome = true;
      this.showBubbleAndLogo = false;
    },
  },
};
</script>

<style lang="scss">
:root {
  --darkGrey: rgb(37, 37, 37);
  --lightGrey: rgb(221, 221, 221);
  --mediumLightGrey: rgb(195, 195, 195);
  --mediumGrey: rgb(93, 93, 98);
  --danger-color: #ff6b6b;
}
#app-one {
  flex-grow: 0;
  flex-shrink: 1;
}
#app-two {
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
}
#app-three {
  flex-grow: 0;
  flex-shrink: 1;
}
body {
  font-family: "Bubbler One", sans-serif;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  margin: 0px;
  background-color: var(--mediumLightGrey);
  z-index: 2;
}
h1 {
  color: var(--lightGrey);
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
}
#home-img {
}
#welcome img {
  margin-left: 30rem;
  width: 800px;
  height: auto;
}
.well {
}
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.button {
  cursor: pointer;
  font-size: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 1rem;
  background-color: var(--mediumGrey);
  color: white;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset;
  border-width: 2px;
  border-style: outset;
  border-color: (rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
}
.button:hover {
  background-color: var(--mediumLightGrey);
}
.add-cart {
  cursor: pointer;
  color: var(--darkGrey);
}
.add-cart:hover {
  color: var(--mediumGrey);
}
a {
  text-decoration: none;
  color: var(--lightGrey);
}
a.router-link-active {
  background-color: var(--lightGrey);
  color: var(--darkGrey);
  border-radius: 0.25rem;
}
#left {
  align-items: center;
  display: flex;
  gap: 0.75rem;
  flex-direction: row;
  width: 50%;
}
#right {
  align-items: center;
  gap: 0.75rem;
  display: flex;
  flex-direction: row;
  width: 50%;
}
input {
  border-radius: 0.5rem;
  border: 2px solid var(--mediumLightGrey);
  background-color: var(--mediumLightGrey);
  padding: 12px 15px;
  margin: 8px 0;

  width: 100%;
}
h1 {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: var(--darkGrey);
}
select {
  border-radius: 0.5rem;
  border: 2px solid var(--mediumLightGrey);
  background-color: var(--mediumLightGrey);
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}
</style>
