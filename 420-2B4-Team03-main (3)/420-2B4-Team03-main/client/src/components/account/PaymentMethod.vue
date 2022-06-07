<template lang="html">
  <form @submit.prevent="addPaymentsMethod">
    <div class="content">
      <div class="container01">
        <h1>Payments Method</h1>
        <div class="container3">
          <ul v-if="user.payments.length > 0">
            <li v-for="payment in user.payments" :key="payment.numbercard">
              <p>
                Cart number:
                {{ payment.numbercard }}
                <font-awesome-icon
                  icon="pencil"
                  v-on:click="updatePaymentMethod(payment)"
                />
                <font-awesome-icon
                  icon="trash"
                  v-on:click="deletePaymentMethod(payment)"
                />
              </p>
            </li>
          </ul>
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
              v-model="numbercard"
              minlength="16"
              required
            />
          </div>
          <div class="container3">
            <label for="card__expiration__year">Expiration</label>
            <select
              name=""
              id="card__expiration__year"
              v-model="expirationMounth"
              required
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
            <select name="" id="" v-model="expirationYear" required>
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
              v-model="ccv"
              required
              minlength="3"
              maxlength="3"
            />
          </div>
        </div>
        <div>
          <button class="button" type="submit">Save Method</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "PaymentMethod",
  data() {
    return {
      numbercard: "",
      expirationMounth: "",
      expirationYear: "",
      ccv: "",
    };
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },

  methods: {
    addPaymentsMethod() {
      const payment = {
        numbercard: this.numbercard,
        expirationMounth: this.expirationMounth,
        expirationYear: this.expirationYear,
        ccv: this.ccv,
      };

      this.user.payments.push(payment);
      this.$store.dispatch("auth/updatedCurrentUser", this.user);

      this.numbercard = "";
      this.expirationMounth = "";
      this.expirationYear = "";
      this.ccv = "";
    },
    deletePaymentMethod(payment) {
      this.user.payments = this.user.payments.filter(function (item) {
        return item !== payment;
      });
      this.numbercard = "";
      this.expirationMounth = "";
      this.expirationYear = "";
      this.ccv = "";
      this.$store.dispatch("auth/updatedCurrentUser", this.user);
    },
    updatePaymentMethod(payment) {
      this.numbercard = payment.numbercard;
      this.expirationMounth = payment.expirationMounth;
      this.expirationYear = payment.expirationYear;
      this.ccv = payment.ccv;
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
