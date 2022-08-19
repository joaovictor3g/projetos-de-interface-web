import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Hello World1</h1>");
});

app.listen(3333, () => console.log("App running"));
