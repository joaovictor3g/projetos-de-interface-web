const usuarioController = require("../controllers/usuario.controller");

module.exports = function (app) {
  app.post("/usuarios", usuarioController.create);
  app.get("/usuarios", usuarioController.list);
  app.post("/usuarios/signin", usuarioController.singIn);
};
