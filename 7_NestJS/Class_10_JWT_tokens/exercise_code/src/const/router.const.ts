import { Router } from "express";
import { authRouter } from "../routes/auth.routes";
import { productsRouter } from "../routes/products.routes";

export const globalRouter = Router();

globalRouter.use("/auth", authRouter);
globalRouter.use("/products", productsRouter);
