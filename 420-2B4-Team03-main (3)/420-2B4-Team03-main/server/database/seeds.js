const index = require("../data/index");
const db = require("./index");

const Item = require("../database/models/item.model");

db.connect(() => {
  const Items = index.getItems();
  const items = [];
  let number = 0;

  for (let i = 0; i < Items.length; i++) {
    const rating = getRandomRating();
    if (items.find((element) => element.id === Items[i].id)) {
    } else {
      const item = {
        id: Items[i].id,
        name: Items[i].name,
        description: Items[i].description,
        image: Items[i].image,
        price: +Items[i].price,
        rating: rating,
        brand: Items[i].brand,
        category: Items[i].category,
        alcohol: Items[i].alcohol,
        listOfIngredients: Items[i].listOfIngredients,
        foodPairing: Items[i].foodPairing,
        discountPercentage: getDiscoutPercentage(),

        fulltexte:
          Items[i].price +
          " " +
          Items[i].name.toLowerCase() +
          " " +
          Items[i].description.toLowerCase() +
          " " +
          rating +
          " " +
          Items[i].alcohol +
          " " +
          Items[i].category.toLowerCase() +
          " " +
          Items[i].brand.toLowerCase(),
      };

      items.push(item);
    }
  }
  //TODO venir changer le seed pour que tu ne delete plus 1 par 1 mais delete la DB one shot avant de la seed ligne 11-12 avant la boucle
  // genre Items.Delete!!!!! ou deleteAll juste verifier la commande exact
  Item.deleteMany().then();

  for (let i = 0; i < items.length; i++) {
    const rating = getRandomRating();

    const newItem = new Item({
      id: Items[i].id,
      name: Items[i].name,
      description: Items[i].description,
      image: Items[i].image,
      price: +Items[i].price,
      rating: rating,
      brand: Items[i].brand,
      category: Items[i].category,
      alcohol: Items[i].alcohol,
      listOfIngredients: Items[i].listOfIngredients,
      foodPairing: Items[i].foodPairing,
      discountPercentage: getDiscoutPercentage(),
      fulltexte:
        Items[i].price +
        " " +
        Items[i].name.toLowerCase() +
        " " +
        Items[i].description.toLowerCase() +
        " " +
        rating +
        " " +
        Items[i].alcohol +
        " " +
        Items[i].category.toLowerCase() +
        " " +
        Items[i].brand.toLowerCase(),
    });
    number++;

    newItem.save().then(() => {
      console.log(`${i + 1} - Item ${Items[i].id} ajouté.`);
    });
  }
});

//TODO Avoir un minimum item en promo

//TODO Simplivier l'algo
/* function getRandomPromotion(number) {
  if (number < 30) {
    return true;
  } else {
    return false;
  }
  const number = Math.floor(Math.random() * 4);
  if (number == 1) {
    return true;
  } else {
    return false;
  } 
} */
//TODO Simplivier l'algo
function getDiscoutPercentage() {
  const number = Math.floor(Math.random() * 4);
  if (number == 0) {
    return 5;
  }
  if (number == 1) {
    return 10;
  }
  if (number == 2) {
    return 15;
  }
  if (number == 3) {
    return 20;
  }

  if (number == 4) {
    return 25;
  }
}
function getRandomRating() {
  const number = Math.floor(Math.random() * 4);
  if (number == 0) {
    return 2;
  }
  if (number == 1) {
    return 3;
  }
  if (number == 2) {
    return 4;
  }
  if (number == 3) {
    return 5;
  }
}
