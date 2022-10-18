import { Router } from "express";
import { authController } from "../controller/auth.controller";
import { postController } from "../controller/post.controller";

const routes = Router();

routes.get("/post/:id", postController.show);

routes.use("/post", authController.check);
routes.get("/post", postController.index);
routes.post("/post", postController.create);
routes.delete("/post/:id", postController.delete);

export { routes as postRoutes };
