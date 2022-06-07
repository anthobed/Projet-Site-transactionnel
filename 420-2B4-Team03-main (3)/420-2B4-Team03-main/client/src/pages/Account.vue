<template lang="html">
  <base-card>
    <template v-slot:head>
      <BasePromoProducts></BasePromoProducts>
    </template>
  </base-card>

  <div class="content">
    <div class="account">
      <div class="left">
        <div id="one-left">
          <PersoInfo></PersoInfo>
        </div>
        <div id="two-left">
          <PaymentMethod></PaymentMethod>
        </div>
      </div>

      <div class="right">
        <div id="one-right">
          <Delivery> </Delivery>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersoInfo from "../components/account/PersoInfo.vue";
import PaymentMethod from "../components/account/PaymentMethod.vue";
import Delivery from "../components/account/Delivery.vue";
import BasePromoProducts from "../components/ui/BasePromoProducts.vue";
export default {
  name: "Account",
  components: {
    PersoInfo,
    PaymentMethod,
    Delivery,
    BasePromoProducts,
  },
};
</script>

<style scoped>
.button {
  width: auto;
}
h1 {
  background-color: var(--darkGrey);
}
.content {
  width: 100%;
  height: 100%;
}

.container-header {
  width: 100%;
  color: var(--lightGrey);
  text-align: center;
}
.container-main {
}

.account {
  display: flex;
  flex-direction: row;
}
.left {
  display: flex;
  flex-direction: column;
  width: 50%;
}
#one-left {
  padding: 2rem;
}
#two-left {
  padding: 2rem;
}
.right {
  display: flex;
  width: 50%;
}
#one-right {
  width: 100%;

  padding: 2rem;
}
#footer {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
