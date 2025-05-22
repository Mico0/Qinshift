import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { joiValidator } from "../middlewares/joi-validator.middleware";
import { userSchema } from "../const/joi-schemas.const";

export const authRouter = Router();

authRouter.post(
  "/register",
  joiValidator(userSchema),
  AuthController.registerUser
);
authRouter.post("/login", AuthController.loginUser);
authRouter.post("/logout", AuthController.logoutUser);
