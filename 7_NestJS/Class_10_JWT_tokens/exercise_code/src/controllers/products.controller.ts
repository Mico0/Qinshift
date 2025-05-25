import { Request, RequestHandler, Response } from "express";
import { ProductsService } from "../services/products.service";
import {
  CreateProductReq,
  UpdateProductRequest,
} from "../interfaces/product.interface";

export class ProductsController {
  static async getAllProducts(req: Request, res: Response) {
    try {
      // console.log("this is the session", req.session);

      const products = await ProductsService.getAllProducts();

      res.json(products);
    } catch (error) {
      res.status(500).json({
        error: "couldn't fetch products",
      });
    }
  }

  static getProductById: RequestHandler = async (req, res) => {
    try {
      const id = req.params.id;

      const product = await ProductsService.getProductById(id);

      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        error: (error as Error).message,
      });
    }
  };

  static createProduct: RequestHandler = async (req, res) => {
    try {
      const reqBody: CreateProductReq = req.body;

      const createdProduct = await ProductsService.createProduct(reqBody);

      res.status(201).json(createdProduct);
    } catch (error) {
      res.status(400).json({
        error: (error as Error).message,
      });
    }
  };

  static updateProduct: RequestHandler = async (req, res) => {
    try {
      if (req.body.id) throw "Invalid Request";

      const productId = req.params.id;
      const reqBody: UpdateProductRequest = req.body;

      await ProductsService.updateProduct(productId, reqBody);

      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({
        error: (error as Error).message,
      });
    }
  };

  static deleteProduct: RequestHandler = async (req, res) => {
    try {
      const productId = req.params.id;

      await ProductsService.deleteProduct(productId);

      res.sendStatus(204);
    } catch (error) {
      res.status(404).json({
        error: (error as Error).message,
      });
    }
  };
}
