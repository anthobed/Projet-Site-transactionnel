<template>
  <div id="cart-container">
    <div id="itemcart">
      <img :src="item.image" />
      <div id="info">
        <p>{{ item.name }}</p>

        <div id="infoBottom">
          <div id="one" v-if="item.promotion == true">
            <p>{{ item.price.toFixed(2) }} $</p>
          </div>
          <div id="one-promo" v-else>
            <p>{{ item.price.toFixed(2) }} $</p>
          </div>
          <div id="two">
            <font-awesome-icon icon="plus" @click="add" class="icon-hover" />

            <p>{{ item.quantity }}</p>
            <font-awesome-icon
              v-if="item.quantity === 1"
              icon="minus"
              class="icon-hover"
            />
            <font-awesome-icon
              v-else
              icon="minus"
              @click="substract"
              class="icon-hover"
            />

            <font-awesome-icon
              icon="trash-can"
              @click="remove"
              class="icon-hover"
            />
          </div>
        </div>

        <p id="priceText">
          Subtotal:({{ item.quantity }} items):
          {{ (item.quantity * item.price).toFixed(2) }} $
        </p>
      </div>
    </div>
  </div>
</template>
<script>
//TODO si l'item est en special afficher le montant du rabais et changer la couleur du prix en rouge(class animate-charcter)
export default {
  name: "ItemCart",
  props: ["item"],

  methods: {
    add() {
      this.$store.dispatch("cart/add", {
        id: this.item.id,
        quantity: this.item.quantity + 1,
      });
      this.$store.dispatch("auth/updatedCurrentUser");
      //this.$store.commit("cart/calculateTotal");
      //comment fait calculate total automatique
    },
    substract() {
      this.$store.dispatch("cart/substract", {
        id: this.item.id,
        quantity: this.item.quantity - 1,
      });
      this.$store.dispatch("auth/updatedCurrentUser");
    },
    remove() {
      this.$store.dispatch("cart/remove", {
        id: this.item.id,
      });
      this.$store.dispatch("auth/updatedCurrentUser");
    },
  },
};
</script>
<style scoped>
.animate-character {
  animation: animate-character 1s linear infinite;
}
.icon-hover:hover {
  color: var(--mediumGrey);
  cursor: pointer;
}
#cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--lightMediumGrey);
  color: var(--darkGrey);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
#itemcart {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
}

#itemcart img {
  width: 2rem;
  height: 5rem;
}
#itemcart i {
  color: var(--darkGrey);
}
#itemcart i:hover {
  cursor: pointer;
  color: var(--mediumGrey);
}
#info {
  font-size: 15px;
  margin-left: 1rem;
  width: 100%;
  height: 100%;
  text-align: left;
}
#info p {
  margin: 0px;
  font-size: 18px;
  font-weight: bold;
}
#infoBottom {
  width: 100%;
  font-size: 18px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;

  flex-wrap: nowrap;

  gap: 7px;
}
#infoBottom p {
  font-size: 18px;
  font-weight: bold;
}

#priceText {
  text-align: right;
}
#one {
  background-color: var(--mediumLightGrey);
  display: flex;
  justify-content: flex-start;
}
#one-promo {
  background-color: var(--mediumLightGrey);
  display: flex;
  justify-content: flex-start;
  color: var(--red);
}
#two {
  display: flex;
  justify-content: flex-end;
  margin-left: 6rem;
  gap: 1rem;
}
</style>
