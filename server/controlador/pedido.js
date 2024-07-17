exports.getAllPedidos = (req, res) => {
  res.send(
    "<Lista de peedidos> pedId=" +
      req.query.pedId +
      "---nombre:" +
      req.query.pedNom
  );
};

exports.nPedido = (req, res) => {
  res.send("Pedido creado:" + req.body.pedId + "---" + req.body.pedNom);
};

exports.rPedido = (req, res) => {
  res.send("<Pedido> =" + req.params.pedId + ":)");
};

exports.uPedido = (req, res) => {
  res.send(
    "Pedido actualizado =" +
      req.params.pedId +
      "---nombre:" +
      req.params.nomPed +
      ":)"
  );
};

exports.dPedido = (req, res) => {
  res.send("Pedido eliminado=" + req.params.pedId + ":)");
};

exports.setCampeon = (req, res) => {
  res.send(
    "Registrar libro CAMPEON=" +
      req.body.champion +
      "---COREITEM=" +
      req.body.coreItem +
      "---SKIN=" +
      req.body.skin +
      ":)"
  );
};
