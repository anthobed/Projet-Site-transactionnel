import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import mitt from "mitt";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store/index.js";
//Importer les fonctions de base

library.add(fas, far, fab);

const eventBus = mitt();

import BaseCardList from "./components/ui/BaseCardItemList.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseCardCart from "./components/ui/BaseCardCart.vue";
import BaseBtnSelectInput from "./components/ui/BaseBtnSelectInput.vue";
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-card-list", BaseCardList);
app.component("base-card", BaseCard);
app.component("base-card-cart", BaseCardCart);
app.component("base-btn-select-input", BaseBtnSelectInput);

app.config.globalProperties.eventBus = eventBus;
app.use(store).use(router);

app.mount("#app");
