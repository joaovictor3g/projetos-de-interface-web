import { Router } from "express";
import { postController } from "../controller/post.controller";

const routes = Router();

routes.get("/posts", postController.index);

export default routes;
