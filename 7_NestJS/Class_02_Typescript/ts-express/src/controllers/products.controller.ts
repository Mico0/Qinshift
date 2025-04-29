import { Request, RequestHandler, Response } from "express";
import { ProductsService } from "../services/products.service";

export class ProdcutsController {
  static async getAllProducts(req: Request, res: Response) {
    try {
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
      res.status(404).send({
        error: (error as Error).message,
      });
    }
  };
}
