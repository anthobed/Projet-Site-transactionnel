<template lang="html">
  <form>
    <div class="container01">
      <h1>Delivery</h1>
      <div class="container3">
        <ol v-if="user.deliverys.length > 0">
          <li v-for="delivery in user.deliverys" :key="delivery.adress">
            <div id="list-user-info">
              <h4>Adress:</h4>
              <p>{{ delivery.adress }}</p>
              <h4>Nom:</h4>
              <p>{{ delivery.fullname }}</p>

              <font-awesome-icon
                icon="pencil"
                v-on:click="setInputDeliveryMethod(delivery)"
              />
              <font-awesome-icon
                icon="trash"
                v-on:click="deleteDeliveryMethod(delivery)"
              />
            </div>
          </li>
        </ol>
      </div>
      <div class="container2">
        <div class="container3">
          <input
            type="name"
            placeholder="FullName"
            v-model="fullname"
            required
          />
        </div>
        <div class="container3">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            v-model="phoneNumber"
            required
          />
        </div>
        <div class="container3">
          <input type="text" placeholder="Adress" v-model="adress" required />
        </div>
        <div class="container3">
          <input
            type="text"
            placeholder="Apt,Suite,Unit,Bulding"
            v-model="app"
          />
        </div>
        <div class="container3">
          <input type="text" placeholder="City" v-model="city" required />
        </div>
        <div class="container3">
          <select
            name="Province/Territory"
            id="Province/Territory"
            v-model="province"
            required
          >
            <option value="Alberta">Alberta</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland">Newfoundland</option>
            <option value="Northwest Territories">Northwest Territories</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Nunavut">Nunavut</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Sakatchewan">Sakatchewan</option>
            <option value="Yukon">Yukon</option>
          </select>
        </div>
        <div class="container3">
          <input
            id="zip"
            name="zip"
            type="text"
            placeholder="Post"
            v-model="post"
            required
          />
        </div>
      </div>
      <div>
        <button
          class="button"
          v-if="modify == false"
          type="button"
          @click="addDeliveryMethod"
        >
          Save Delivery
        </button>
        <button class="button" v-if="modify == true" @click="updatedDelivery">
          Modify
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "PersoInfo",
  data() {
    return {
      delivery: {
        fullname: "",
        adress: "",
        phoneNumber: "",
        app: "",
        city: "",
        province: "",
        post: "",
      },

      modify: false,
    };
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    this.$store.state.auth.user.deliverys;
  },
  methods: {
    addDeliveryMethod() {
      this.delivery = {
        fullname: this.fullname,
        adress: this.adress,
        phoneNumber: this.phoneNumber,
        app: this.app,
        city: this.city,
        province: this.province,
        post: this.post,
      };
      this.user.deliverys.push(this.delivery);
      this.$store.dispatch("auth/updatedCurrentUser", this.user);
      this.adress = "";
      this.fullname = "";
      this.phoneNumber = "";
      this.app = "";
      this.city = "";
      this.province = "";
      this.post = "";
    },
    deleteDeliveryMethod(delivery) {
      console.log(delivery);
      this.user.deliverys = this.user.deliverys.filter(function (item) {
        return item !== delivery;
      });
      this.adress = "";
      this.fullname = "";
      this.phoneNumber = "";
      this.app = "";
      this.city = "";
      this.province = "";
      this.post = "";
      this.$store.dispatch("auth/updatedCurrentUser", this.user);
    },
    setInputDeliveryMethod(delivery) {
      this.adress = delivery.adress;
      this.fullname = delivery.fullname;
      this.phoneNumber = delivery.phoneNumber;
      this.app = delivery.app;
      this.city = delivery.city;
      this.province = delivery.province;
      this.post = delivery.post;

      this.modify = true;
      this.$store.dispatch("auth/updatedCurrentUser", this.user);
    },
    updatedDelivery() {
      this.$store.dispatch("auth/updatedDelivery", this.delivery);
    },
  },
};
</script>

<style scoped>
.content {
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 1rem;
  margin: 0;
  padding: 0;
}
#list-user-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.25rem;
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
  font-size: 15px;
  font-weight: bold;
  color: var(--darkGrey) bold;
}
.container01 {
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
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
