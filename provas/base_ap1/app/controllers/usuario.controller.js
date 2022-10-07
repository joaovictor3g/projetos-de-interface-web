const Usuario = require("../models/usuario.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { parseMany, parseOne } = require("../views/usuario.view");

module.exports = {
  async create(req, res) {
    const { senha, ...rest } = req.body;

    try {
      const passwordHashed = bcrypt.hashSync(senha, 10);

      const usuario = await Usuario.create({
        senha: passwordHashed,
        ...rest,
      });
      return res.status(201).json(parseOne(usuario));
    } catch (err) {
      return res.json({ message: "Erro ao criar usuário" });
    }
  },

  async list(req, res) {
    const { token } = req.headers;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
      const usuarios = await Usuario.find();
      return res.json(parseMany(usuarios));
    } catch (err) {
      return res.json({ message: "Erro", errMsg: err.message });
    }
  },

  async singIn(req, res) {
    const { email, senha } = req.body;

    try {
      const userByEmail = await Usuario.findOne({ email });

      if (!userByEmail) return res.status(500).json({ message: "Erro" });

      if (bcrypt.compareSync(senha, userByEmail.senha)) {
        const token = jwt.sign(
          { _id: userByEmail._id, funcao: userByEmail.funcao },
          process.env.JWT_SECRET
        );
        return res.json({ token });
      }

      return res.status(401).json({ message: "Unauthorized" });
    } catch (err) {
      return res.status(500).json({ message: "Erro", err: err.message });
    }
  },
};
