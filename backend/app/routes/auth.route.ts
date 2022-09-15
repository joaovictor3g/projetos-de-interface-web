import { Router } from "express";
import { authController } from "../controller/auth.controller";

const routes = Router();

routes.post("/login", authController.index);

export { routes as authRoutes };
