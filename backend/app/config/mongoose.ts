import mongoose from "mongoose";

export function connect(uri: string) {
  mongoose.connect(uri);
  mongoose.connection.on("connected", function () {
    console.log("Mongoose! Conectado em " + uri);
  });
  mongoose.connection.on("disconnected", function () {
    console.log("Mongoose! Desconectado de " + uri);
  });
  mongoose.connection.on("error", function (erro) {
    console.log("Mongoose! Erro na conexão: " + erro);
  });
  mongoose.set("debug", true);
}
