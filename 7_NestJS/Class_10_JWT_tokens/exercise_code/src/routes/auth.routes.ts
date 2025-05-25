import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

export const authRouter = Router();

authRouter.get("/", AuthController.getUsers);

authRouter.post("/register", AuthController.registerUser);
authRouter.post("/login", AuthController.loginUser);
