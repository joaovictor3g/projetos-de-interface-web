const Medico = require("../models/medico.model");
const Consulta = require("../models/consulta.model");

const jwt = require("jsonwebtoken");
const { parseOne } = require("../views/medico.view");

const functionMapper = new Map([
  ["atendente", 1],
  ["paciente", 2],
]);

module.exports = {
  async create(req, res) {
    const medico = req.body;
    const { token } = req.headers;

    if (!token) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    try {
      const created = await Medico.create(medico);
      return res.status(201).json(parseOne(created));
    } catch (err) {
      return res.json({ message: "Erro ao criar Médico" });
    }
  },

  async listById(req, res) {
    const { id } = req.params;
    const { token } = req.headers;

    const usuario = jwt.decode(token);

    if (usuario.funcao === functionMapper.get("paciente")) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    try {
      const medico = await Consulta.findOne({ mid: id })
        .populate("uid", { nome: 1, email: 1, funcao: 1, _id: 1 })
        .populate("mid");
      return res.json(medico);
    } catch (err) {
      return res.json({ message: "Erro", errMsg: err.message });
    }
  },
};
