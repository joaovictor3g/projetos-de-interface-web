import { Router } from "express";
import { authController } from "../controller/auth.controller";
import { userController } from "../controller/user.controller";

const routes = Router();

routes.use("/user", authController.check);
routes.get("/user", userController.index);
routes.get("/user/:id", userController.show);
routes.post("/user", userController.create);
routes.delete("/user/:id", userController.delete);

export { routes as userRoutes };
