const Sale = require("../database/models/sale.model");

exports.createSale = (sale) => {
  const newSale = new Sale({
    name: sale.name,
    email: sale.email,
    subtotal: sale.subtotal,
    gst: sale.gst,
    qst: sale.qst,
    shipping: sale.shipping,
    total: sale.total,
    itemsCart: sale.itemsCart,
    delivery: sale.delivery,
    payment: sale.payment,
  });

  return newSale.save();
};
