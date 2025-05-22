import { Router } from "express";
import { productsRouter } from "../routes/products.routes";
import { authRouter } from "../routes/auth.routes";
import { tokenValidator } from "../middlewares/token-validator.middleware";

export const globalRouter = Router();

globalRouter.use("/auth", authRouter);
globalRouter.use("/products", tokenValidator, productsRouter);
