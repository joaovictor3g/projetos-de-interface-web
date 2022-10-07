const consultaController = require("../controllers/consulta.controller");

module.exports = function (app) {
  app.post("/consultas", consultaController.create);
  app.get("/consultas", consultaController.list);
};
