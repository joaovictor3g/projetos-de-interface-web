const medicoController = require("../controllers/medico.controller");

module.exports = function (app) {
  app.post("/medicos", medicoController.create);
  app.get("/medicos/:id/consultas", medicoController.listById);
};
