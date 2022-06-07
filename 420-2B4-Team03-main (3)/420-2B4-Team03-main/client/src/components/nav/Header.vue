<template lang="html">
  <div class="header">
    <div class="logo" @click="$router.push('/')">
      <img src="../../assets/Logo.png" />
    </div>
    <div id="promo" class="animate-charcter">
      <p>Buy 200 $ for free shipping</p>
    </div>
    <div v-if="!isLoggedIn" class="header-right">
      <router-link to="/signin"
        ><div class="icon-header">
          <font-awesome-icon icon="sign-in-alt" class="delPadding" />
          <p>SignIn</p>
        </div></router-link
      >
      <router-link to="/signup">
        <div class="icon-header">
          <font-awesome-icon icon="user-plus" class="delPadding" />
          <p>SignUp</p>
        </div></router-link
      >
    </div>
    <div v-else>
      <div class="header-right">
        <router-link to="/products">
          <div class="icon-header">
            <font-awesome-icon icon="beer" class="delPadding" />
            <p>Product</p>
          </div></router-link
        >

        <router-link to="/cart">
          <div class="icon-header">
            <font-awesome-icon icon="shopping-cart" class="delPadding" />
            <p>Cart</p>
          </div></router-link
        >
        <router-link to="/account">
          <div class="icon-header">
            <font-awesome-icon icon="user" class="delPadding" />
            <p>Account</p>
          </div></router-link
        >

        <div class="icon-header" @click="signout">
          <font-awesome-icon icon="sign" class="delPadding" />
          <p>SignOut</p>
        </div>
      </div>
      <!--a href="#home"> <i class="fab fa-salesforce"></i>Promo</!--a-->
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
  methods: {
    signout() {
      this.$store.commit("auth/signout");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.header {
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 100%;
  overflow: hidden;
  background-color: var(--darkGrey);
  padding: 20px 10px;
  color: white;
  z-index: 11;
}
.icon-header {
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  border-radius: 0.25rem;
}
.icon-header:hover {
  cursor: pointer;
  background-color: var(--lightGrey);
  color: var(--darkGrey);
}
.icon-header p {
  margin: 0.5rem;
}

.delPadding {
  margin: 0.5rem;
}

.logo {
  width: 20%;
  height: 100%;
}

header p {
  color: #ff6b6b;
  font-size: 25px;
}

.header-right {
  display: flex;

  justify-content: space-evenly;

  width: 40%;
}

.logo:hover {
  cursor: pointer;
}
img {
  margin-top: -2rem;
  width: 10rem;
  height: 8rem;
}

#promo {
  text-align: center;
  font-size: 35px;
  width: 40rem;
  font-weight: 1000;
  color: var(--danger-color);
}
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #571515 0%,
    #8f2424 29%,
    #ff131f 67%,
    #f37847 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 190px;
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
