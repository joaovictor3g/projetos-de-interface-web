import express from "express";
import studentRoute from "./app/routes/student.route";
import postRoute from "./app/routes/post.route";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(studentRoute);
app.use(postRoute);

app.listen(PORT, () => console.log("App running"));
