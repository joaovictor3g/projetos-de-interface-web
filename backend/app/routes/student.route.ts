import { Router } from "express";
import { studentController } from "../controller/student.controller";

const routes = Router();

routes.get("/alunos", studentController.index);
routes.get("/alunos/:id", studentController.show);
routes.post("/alunos", studentController.create);
routes.delete("/alunos/:id", studentController.delete)

export default routes;
