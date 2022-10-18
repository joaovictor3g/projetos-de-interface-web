import { Router } from "express";
import { authController } from "../controller/auth.controller";
import { commentController } from "../controller/comment.controller";

const routes = Router();

routes.use("/comment", authController.check);
routes.get("/comment/:postId", commentController.index);
// routes.get("/comment/:postId", commentController.show);
routes.post("/comment", commentController.create);
routes.delete("/comment/:id", commentController.delete);

export { routes as commentRoutes };
