<template lang="html">
  <div class="content">
    <div class="container01">
      <h1>Personal Info</h1>
      <div class="container2">
        <div class="container3">
          <label for="name">Fullname:</label>
          <input type="name" v-model="user.name" />
        </div>
        <div class="container3">
          <div id="left">
            <label for="birthday">Birthday:</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              v-model="user.birthday"
            />
          </div>
          <div id="right">
            <label for="gender">Gender:</label>
            <select name="gender" id="gender" v-model="user.gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary ">Non-binary</option>
            </select>
          </div>
        </div>
        <div class="container3">
          <label for="email">Email:</label>
          <input type="email" readonly v-model="user.local.email" />
        </div>
        <button class="button" v-on:click.prevent="updateUserInfo">
          Update Info
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersoInfo",

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    updateUserInfo() {
      this.$store.dispatch("auth/updatedCurrentUser");
    },
  },
};
</script>

<style scoped>
.content {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 1rem;
}
h1 {
  background-color: var(--darkGrey);
  margin: 0%;
}
.button {
  margin-bottom: 1rem;
  width: auto;
}

label {
  color: var(--darkGrey) bold;
}

label {
  font-size: 15px;
  font-weight: bold;
}
.container01 {
  width: 100%;
  text-align: center;
  background-color: var(--lightGrey);
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
}
.container3 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 0.75rem;
}
.container2 {
  margin: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
