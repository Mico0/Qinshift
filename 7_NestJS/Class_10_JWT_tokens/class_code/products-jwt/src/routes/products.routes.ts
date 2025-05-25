import { Router } from "express";
import { ProductsController } from "../controllers/products.controller";
import { joiValidator } from "../middlewares/joi-validator.middleware";
import {
  createProductSchema,
  updateProductSchema,
} from "../const/joi-schemas.const";

export const productsRouter = Router();

productsRouter.get("/", ProductsController.getAllProducts);
productsRouter.get("/:id", ProductsController.getProductById);
productsRouter.post(
  "/",
  joiValidator(
    createProductSchema,
    "couldn't create product, invalid product data"
  ),
  ProductsController.createProduct
);
productsRouter.patch(
  "/:id",
  joiValidator(updateProductSchema),
  ProductsController.updateProduct
);
productsRouter.delete("/:id", ProductsController.deleteProduct);
