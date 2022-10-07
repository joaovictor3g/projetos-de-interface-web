const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  funcao: {
    type: Number,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Usuario", usuarioSchema);
