function parseOne(medico) {
  return {
    _id: medico._id,
  };
}

function parseMany(medicos) {
  return medicos.map((medico) => parseOne(medico));
}

module.exports = { parseOne, parseMany };
