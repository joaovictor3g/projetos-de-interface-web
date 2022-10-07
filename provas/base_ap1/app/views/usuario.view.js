function parseOne(usuario) {
  return {
    _id: usuario._id,
    nome: usuario.nome,
    email: usuario.email,
    funcao: usuario.funcao,
  };
}

function parseMany(usuarios) {
  return usuarios.map((usuario) => parseOne(usuario));
}

module.exports = { parseOne, parseMany };
