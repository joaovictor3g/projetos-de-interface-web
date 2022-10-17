import { Router } from "express";
import { authController } from "../controller/auth.controller";
import { userController } from "../controller/user.controller";

const routes = Router();

routes.post("/user", userController.create);
routes.use("/user", authController.check);
routes.get("/user", userController.index);
routes.delete("/user/:id", userController.delete);

routes.use("/user-by-id", authController.check);
routes.get("/user-by-id", userController.show);

export { routes as userRoutes };
