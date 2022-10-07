const dotenv = require("dotenv");
dotenv.config();

let http = require("http");
const consultaRoute = require("./app/routes/consulta.route.js");
const medicoRoute = require("./app/routes/medico.route.js");
const usuarioRoute = require("./app/routes/usuario.route.js");
let db = require("./config/db.js");

let modulo_express = require("./config/express.js");
let app = modulo_express.setup();

http.createServer(app).listen(app.get("port"), function () {
  console.log("Express Server escutando na porta " + app.get("port"));
});
usuarioRoute(app);
medicoRoute(app);
consultaRoute(app);

db("mongodb://localhost/sistemaap1");
