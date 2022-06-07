<template lang="html">
  <div class="content">
    <form @submit.prevent="trySubmit">
      <div class="signUp">
        <div id="header">
          <h1>SignUp</h1>
        </div>
        <div id="main">
          <input
            type="name"
            placeholder="FullName"
            v-model="form.name"
            required
          />

          <input
            type="email"
            placeholder="Email"
            v-model="form.email"
            required
          />

          <input
            type="password"
            placeholder="Password"
            v-model="form.password"
            required
          />
          <input
            type="password"
            placeholder="Confirm"
            v-model="form.confirm"
            required
          />
        </div>

        <div id="footer">
          <div class="div-1">
            <button class="button">
              Sign-Up With Facebook
              <font-awesome-icon :icon="['fab', 'facebook-square']" />
            </button>
          </div>
          <div class="div-2">
            <button class="button">
              Sign-Up With Google
              <font-awesome-icon :icon="['fab', 'google']" />
            </button>
            <ul v-if="formErrors.length > 0">
              <!--TODO:doit faire reset array Errors si on passe de signup a signin-->
              <li v-for="error in formErrors" :key="error">{{ error }}</li>
            </ul>
          </div>

          <div id="btn-signup">
            <div>
              <button
                class="button"
                type="submit"
                :class="{ disabled: isLoading }"
              >
                Sign Up
              </button>
            </div>
            <div>
              <h3>Already Sign-up ?</h3>
              <router-link to="/SignIn"><h2>Sign-in Here!</h2> </router-link>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirm: "",
      },
      formErrors: [],
    };
  },

  methods: {
    trySubmit() {
      this.$store.dispatch("auth/trySignup", this.form);
    },
    isValid() {
      this.formErrors = [];
      const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
      if (!regex.test(this.form.email)) {
        this.formErrors.push("Courriel non valide.");
      }
      if (this.form.password.trim().length < 8) {
        this.formErrors.push(
          "Mode de passe trop petit (8 caractères minimum)."
        );
      } else {
        if (this.form.password.trim() !== this.form.confirm.trim()) {
          this.formErrors.push("Les mots de passe ne concordent pas.");
        }
      }

      return !this.formErrors.length;
    },
  },
  watch: {
    errors: {
      handler(newValue) {
        this.formErrors = newValue;
      },
      deep: true,
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
ul {
  list-style-type: none;
}
li {
  color: red;
  font-size: 1.5rem;
  font-weight: bold;
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
.content {
  justify-content: center;
  align-items: center;
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

.signUp {
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
