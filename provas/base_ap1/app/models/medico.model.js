const mongoose = require("mongoose");

const medicoSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  crm: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Medico", medicoSchema);
