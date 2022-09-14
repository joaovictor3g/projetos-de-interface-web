import { Router } from "express";
import { postController } from "../controller/post.controller";

const routes = Router();

routes.get("/post", postController.index);
routes.get("/post/:id", postController.show);
routes.post("/post", postController.create);
routes.delete("/post/:id", postController.delete);

export { routes as postRoutes };
