<template lang="html">
  <div class="content">
    <form @submit.prevent="trySubmit">
      <div class="signIn">
        <div id="header">
          <h1>SignIn</h1>
        </div>
        <div id="main">
          <input type="email" placeholder="Email" v-model="form.email" />

          <input
            type="password"
            placeholder="Password"
            v-model="form.password"
          />
        </div>
        <div id="footer">
          <div class="div-1">
            <button class="button">
              Connect With Facebook
              <font-awesome-icon :icon="['fab', 'facebook-square']" />
            </button>
          </div>
          <div class="div-2">
            <button class="button">
              Connect With Google
              <font-awesome-icon :icon="['fab', 'google']" />
            </button>

            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </div>
          <div id="btn-signup">
            <div>
              <button type="submit" class="button">SignIn</button>
            </div>
            <div>
              <h3>Not Sign-in ?</h3>
              <router-link to="/Signup"><h2>Sign-up here!</h2></router-link>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "SignIn",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    trySubmit() {
      this.$store.dispatch("auth/trySignin", this.form);
    },
  },
  computed: {
    errors() {
      return this.$store.state.auth.errors;
    },
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
  },
};
</script>

<style scoped>
.content {
  justify-content: center;
  align-items: center;
}
h1 {
  background-color: var(--darkGrey);
  margin: 0;
  padding: 0.25rem;
}
h2 {
  color: var(--darkGrey);
}
h2:hover {
  color: var(--mediumGrey);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset;
}

#header {
  width: 100%;
  background-color: var(--darkGrey);
  color: var(--lightGrey);
  margin: 0px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0rem;
  padding: 0rem;
  margin: 0.5rem;
}
#footer {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}
#footer .div-1,
#footer .div-2 {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1.5rem;
}

.signIn {
  display: flex;
  flex-direction: column;

  background: var(--lightGrey);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 1rem;
  width: 100vh;
}

input {
  width: 90%;
  color: var(--darkGrey);
}
#btn-signup {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
