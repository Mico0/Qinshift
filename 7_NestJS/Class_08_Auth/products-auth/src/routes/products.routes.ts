import { Router } from "express";
import { ProductsController } from "../controllers/products.controller";

export const productsRouter = Router();

productsRouter.get("/", ProductsController.getAllProducts);
productsRouter.get("/:id", ProductsController.getProductById);
productsRouter.post("/", ProductsController.createProduct);
productsRouter.patch("/:id", ProductsController.updateProduct);
productsRouter.delete("/:id", ProductsController.deleteProduct);
