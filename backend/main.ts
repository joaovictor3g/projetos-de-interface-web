import express from "express";
import studentRoute from "./app/routes/student.route";
import postRoute from "./app/routes/post.route";
import { connect } from "./app/config/mongoose";

const app = express();
const port = 3333;

app.use(express.json());
app.use(studentRoute);
app.use(postRoute);

connect("mongodb://localhost/sistema_matricula");

app.listen(port);
