import { Router } from "express";
import { postController } from "../controller/post.controller";

const routes = Router();

routes.get("/posts", postController.index);
routes.get("/posts/:id", postController.show);
routes.post("/posts", postController.create);
routes.delete("/posts/:id", postController.delete);

export default routes;
