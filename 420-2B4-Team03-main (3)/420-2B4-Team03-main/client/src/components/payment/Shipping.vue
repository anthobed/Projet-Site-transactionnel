<template lang="html">
  <div class="container01">
    <h1>Shipping</h1>
    <div class="container2">
      <div class="container3" v-if="user.deliverys.length > 0">
        <label> Adress: </label>
        <select @change="onChange($event)">
          <option v-for="delivery in user.deliverys" :key="delivery._id">
            {{ delivery.adress }}
          </option>
        </select>
      </div>
    </div>
    <div class="container2">
      <div class="container3">
        <input
          type="name"
          placeholder="FullName"
          v-model="sale.delivery.fullname"
        />
      </div>
      <div class="container3">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          v-model="sale.delivery.phoneNumber"
        />
      </div>
      <div class="container3">
        <input
          type="text"
          placeholder="Adress"
          v-model="sale.delivery.adress"
        />
      </div>
      <div class="container3">
        <input
          type="text"
          placeholder="Apt,Suite,Unit,Bulding"
          v-model="sale.delivery.app"
        />
      </div>
      <div class="container3">
        <input type="text" placeholder="City" v-model="sale.delivery.city" />
      </div>
      <div class="container3">
        <select
          name="Province/Territory"
          id="Province/Territory"
          v-model="sale.delivery.province"
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
          pattern="[0-9]*"
          placeholder="Post"
          v-model="sale.delivery.post"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shipping",
  data() {
    return {
      fullname: "",
      adress: "",
      phoneNumber: "",
      app: "",
      city: "",
      province: "",
      post: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    sale() {
      return this.$store.state.cart.sale;
    },
  },
  methods: {
    onChange(event) {
      this.sale.delivery.adress = event.target.value;

      const delivery = this.user.deliverys.find(
        (element) => element.adress == event.target.value
      );

      this.sale.delivery.fullname = delivery.fullname;
      this.sale.delivery.phoneNumber = delivery.phoneNumber;
      this.sale.delivery.app = delivery.app;
      this.sale.delivery.city = delivery.city;
      this.sale.delivery.province = delivery.province;
      this.sale.delivery.post = delivery.post;
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
