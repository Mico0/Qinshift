import { Router } from "express";
import { ProdcutsController } from "../controllers/products.controller";

export const productsRouter = Router();

productsRouter.get("/", ProdcutsController.getAllProducts);
productsRouter.get("/:id", ProdcutsController.getProductById);
