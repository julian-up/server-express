module.exports = (app) => {
  var pedCtrl = require("../controlador/pedido");

  app.route("/api/pedidos").get(pedCtrl.getAllPedidos).post(pedCtrl.nPedido);

  app
    .route("/api/pedidos/:pedId")
    .get(pedCtrl.rPedido)
    .put(pedCtrl.uPedido)
    .delete(pedCtrl.dPedido);

  app.route("/api/setCampeon").post(pedCtrl.setCampeon);
};
