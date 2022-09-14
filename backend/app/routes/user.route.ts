import { Router } from "express";
import { userController } from "../controller/user.controller";

const routes = Router();

routes.get("/user", userController.index);
routes.get("/user/:id", userController.show);
routes.post("/user", userController.create);
routes.delete("/user/:id", userController.delete);

export { routes as userRoutes };
