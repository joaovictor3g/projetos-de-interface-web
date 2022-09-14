import { Router } from "express";
import { commentController } from "../controller/comment.controller";

const routes = Router();

routes.get("/comment", commentController.index);
routes.get("/comment/:id", commentController.show);
routes.post("/comment", commentController.create);
routes.delete("/comment/:id", commentController.delete);

export { routes as commentRoutes };
