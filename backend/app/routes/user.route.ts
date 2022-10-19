import { Router } from "express";
import { authController } from "../controller/auth.controller";
import { userController } from "../controller/user.controller";

const routes = Router();

routes.post("/user", userController.create);
routes.use("/user", authController.check);
routes.get("/user", userController.index);
routes.delete("/user/:id", userController.delete);

routes.use("/me", authController.check);
routes.get("/me", userController.show);

export { routes as userRoutes };
