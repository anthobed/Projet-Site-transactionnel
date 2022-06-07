const { getItems, getGeneratedItems,getItem } = require("../queries/items.queries");

exports.getItems = async (req, res, next) => {
  try {
    const Items = await getItems();
    res.json(Items);
  } catch (err) {
    next(err);
  }
};
exports.getItem = async (req, res, next) => {
  try {
    const Item = await getItem(req.params.id);
    res.json(Item);
  } catch (err) {
    next(err);
  }
};

exports.getGeneratedItems = async (req, res, next) => {
  try {
    const items = await getGeneratedItems();
    res.json(items);
  } catch (err) {
    next(err);
  }
};
