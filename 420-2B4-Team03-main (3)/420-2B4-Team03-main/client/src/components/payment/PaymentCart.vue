<template lang="html">
  <form>
    <div class="content">
      <div class="container01">
        <h1>Payments Method</h1>
        <div class="container3" v-if="user.payments.length > 0">
          <label> Cart :</label>
          <select @change="onChange($event)">
            <option v-for="payment in user.payments" :key="payment.numbercard">
              {{ payment.numbercard }}
            </option>
          </select>
        </div>

        <div class="container2">
          <div class="container3">
            <label for="card__number" class="card__number__label"
              >Card Number</label
            >
            <input
              type="text"
              id="card__number"
              class="card__number__input"
              placeholder="4000 1234 5678 9010"
              v-model="sale.payment.numbercard"
              required
            />
          </div>
          <div class="container3">
            <label for="card__expiration__year">Expiration</label>
            <select
              name=""
              id="card__expiration__year"
              v-model="sale.payment.expirationMounth"
            >
              <option value="january">January</option>
              <option value="februrary">Februrary</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
            <select name="" id="" v-model="sale.payment.expirationYear">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
            <label for="">CCV</label>
            <input
              type="text"
              class="card__ccv__input"
              placeholder="583"
              v-model="sale.payment.ccv"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "PaymentCart",

  inject: ["addsale"],

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    sale() {
      return this.$store.state.cart.sale;
    },
  },
  mounted() {
    console.log(this.user);
  },
  methods: {
    onChange(event) {
      this.sale.payment.numbercard = event.target.value;

      const payment = this.user.payments.find(
        (element) => element.numbercard == event.target.value
      );
      this.sale.payment.expirationMounth = payment.expirationMounth;
      this.sale.payment.expirationYear = payment.expirationYear;
      this.sale.payment.ccv = payment.ccv;
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
