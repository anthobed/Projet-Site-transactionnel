import axios from "axios";
const resource_Items = "/api/items";
export default {
  namespaced: true,
  state: {
    sortStatus: [],
    filterStatus: [],
    filterByRating: "",
    filterByText: "",
    filterByAbv: null,
    filterRating: null,
    timerCount: 0,
    showTimer: "",
    products: [],
    productsPromo: [],
    itemByPage: 0,
    itemByPageScroll: 0,
    oldValue: 4,
    newValue: 0,
    scrollItem: null,
    product: {}, //STRUCTURE D'OBJECT DE BASE
  },
  mutations: {
    addItems(state, payload) {
      state.products = payload;
      state.productsPromo = payload.filter((product) => {
        let date = new Date(Date.now());
        let dateNow = date.getTime();

        if (product.featuredExpiration > dateNow) {
          return product;
        }
        console.log("les items en promo son ajouter au array");
      });
    },
    itemsPromo(state, payload) {
      const product = state.productsPromo.find((item) => item.id === payload);

      state.productsPromo.splice(state.productsPromo.indexOf(product), 1);
    },
    //addItemsPromo(state, payload) {},

    setSort(state, payload) {
      const existing = state.sortStatus.find(
        (status) => status.field == payload.field
      );
      if (existing) {
        existing.order = payload.order;
      } else {
        state.sortStatus.push(payload);
      }
    },
    setFilter(state, payload) {
      console.log("payload", payload);
      const existing = state.filterStatus.find(
        (status) => status.field == payload.field
      );
      if (existing) {
        existing.value = payload.value;
      } else {
        state.filterStatus.push(payload);
      }
    },

    setSearch(state, payload) {
      state.filterByText = payload;
    },

    setItemsByPage(state, payload) {
      console.log("payload", payload);
      state.itemByPage = payload;
    },
    setProductShow(state, payload) {
      //change itemactif + nombre x (10-20)

      state.itemByPage += payload;
      state.itemByPageScroll = payload;
    },
    setFilterRating(state, payload) {
      state.filterRating = payload;
    },
    setCurrentProduct(state, payload) {
      console.log("payload", payload);

      state.product = payload;
    },
  },
  actions: {
    async getItems(context) {
      const res = await axios.get(resource_Items);

      context.commit("addItems", res.data);
    },
    async getItemsPromo(context) {
      const res = await axios.get("/api/items/generatedItems");
      context.commit("addItems", res.data);
    },
    deleteItemsPromo(context, payload) {
      //const productsPromo = context.state.productsPromo;
      const id = payload.id;
      context.commit("itemsPromo", id);
    },
    async getItem(context, payload) {
      const res = await axios.get(`/api/items/${payload}`);
      console.log("res de getItem", res.data);
      context.commit("setCurrentProduct", res.data);
    },
  },
  getters: {
    getProducts(state) {
      let result = state.products;
      if (state.filterStatus.length > 0) {
        state.filterStatus.forEach((filter) => {
          if (filter.field == "category") {
            result = result.filter((product) => {
              return filter.value == ""
                ? product[filter.field] == filter.value
                : product[filter.field] == filter.value;
            });
          } //TODO rating category et alcool fonction en pair mais pas les 3 ensemble
          if (filter.field == "rating") {
            result = result.filter((product) => {
              return filter.value == ""
                ? product[filter.field] == filter.value
                : product[filter.field] == filter.value;
            });
          }
          if (filter.field == "alcohol") {
            result = result.filter((product) => {
              return filter.value == ""
                ? product[filter.field] < filter.value &&
                    product[filter.field] > filter.value - 5
                : product[filter.field] < filter.value;
            });
          }
        });
      }
      if (state.sortStatus.length > 0) {
        state.sortStatus.forEach((sort) => {
          result = result.sort((a, b) => {
            return sort.order == "Asc"
              ? +a[sort.field] - +b[sort.field]
              : +b[sort.field] - +a[sort.field];
          });
        });
      }
      if (state.filterByText != "") {
        result = result.filter((product) => {
          return product.fulltexte.includes(state.filterByText.toLowerCase());
        });
      }

      return result.slice(0, state.itemByPage);
    },
    getProductsPromo(state) {
      return state.productsPromo;
    },
    getCurrentItem(state) {
      return state.product;
    },
  },
};
