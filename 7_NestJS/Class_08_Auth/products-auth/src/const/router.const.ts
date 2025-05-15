import { Router } from "express";
import { productsRouter } from "../routes/products.routes";
import { authRouter } from "../routes/auth.routes";

export const globalRouter = Router();

globalRouter.use("/auth", authRouter);
globalRouter.use("/products", productsRouter);
