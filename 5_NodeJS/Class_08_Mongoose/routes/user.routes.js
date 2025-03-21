import UserController from "../controllers/user.controller.js";
import e, { Router } from "express";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);

export default userRouter;
