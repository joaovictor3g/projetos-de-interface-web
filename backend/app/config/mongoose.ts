import mongoose from "mongoose";

export function connect(uri: string) {
  mongoose.connect(uri);
  mongoose.connection.on("connected", () =>
    console.log("Mongoose! Conectado em " + uri)
  );
  mongoose.connection.on("disconnected", () =>
    console.log("Mongoose! Desconectado de " + uri)
  );
  mongoose.connection.on("error", (erro) =>
    console.log("Mongoose! Erro na conexão: " + erro)
  );
  mongoose.set("debug", true);
}
