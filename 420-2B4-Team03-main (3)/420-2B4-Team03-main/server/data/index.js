const ITEMS_FILE = "./data/beersUpdated.json";
const Loader = require("./Loader");

const fs = require("fs");

const ItemsLoader = new Loader(ITEMS_FILE);

function getItems() {
  return ItemsLoader.get();
}
exports.getItems = getItems;
