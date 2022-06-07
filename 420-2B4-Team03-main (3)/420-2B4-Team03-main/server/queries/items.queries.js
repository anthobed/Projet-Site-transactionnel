const Item = require("../database/models/item.model");

exports.getItems = () => {
  return Item.find({}).exec();
};
exports.getItem = async (id) => {
  const item = await Item.findOne({id: id}).exec();
  return item
};

exports.getGeneratedItems = async () => {
  const items = await Item.find({}).exec();
  for (let index = 0; index < 30; index++) {
    let datenow = new Date(Date.now());
    const number = Math.floor(Math.random() * 160) + 1;

    const filter = { id: number };

    await Item.findOneAndUpdate(
      filter,
      {
        featuredExpiration:
          datenow.getTime() +
          Math.floor(Math.random() * (1000000 - 150000)) +
          15000,
      },
      {
        new: true,
      }
    );
  }
  return items;
};

7;
