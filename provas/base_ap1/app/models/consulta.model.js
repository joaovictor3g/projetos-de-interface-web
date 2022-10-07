const mongoose = require("mongoose");

const consultaSchema = mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Usuario",
  },
  mid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Medico",
  },
});

module.exports = mongoose.model("Consulta", consultaSchema);
