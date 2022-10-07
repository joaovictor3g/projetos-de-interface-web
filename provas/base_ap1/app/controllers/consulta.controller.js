const Consulta = require("../models/consulta.model");

const jwt = require("jsonwebtoken");

const functionMapper = new Map([
  ["atendente", 1],
  ["paciente", 2],
]);

module.exports = {
  async create(req, res) {
    const consulta = req.body;
    const { token } = req.headers;

    const usuario = jwt.decode(token);
    const pacient = functionMapper.get("paciente");

    if (usuario.funcao === pacient) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    try {
      await Consulta.create(consulta);
      return res.status(201).json({ message: "Consulta criada com sucesso" });
    } catch (err) {
      return res.json({ message: "Erro ao criar Consulta" });
    }
  },

  async list(req, res) {
    const { id } = req.params;
    const { token } = req.headers;

    const usuario = jwt.decode(token);
    const patient = functionMapper.get("atendente");

    try {
      if (usuario.funcao === patient) {
        const consultas = await Consulta.findOne({ uid: id }).populate("uid");
        return res.json(consultas);
      } else {
        const consultas = await Consulta.find();
        return res.json(consultas);
      }
    } catch (err) {
      return res.json({ message: "Erro", errMsg: err.message });
    }
  },
};
