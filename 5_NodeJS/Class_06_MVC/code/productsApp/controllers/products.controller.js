import ProductService from "../services/products.service.js";

export default class ProductController {
  static async getProdcts(req, res) {
    try {
      const products = await ProductService.getProducts();
      res.send(products);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async getProduct(req, res) {
    try {
      const product = await ProductService.getProduct(req.params.id);
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async createProduct(req, res) {
    try {
      const productBody = req.body;
      const product = await ProductService.createProduct(productBody);
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async updateProduct(req, res) {
    try {
      const productId = req.params.id;
      const productBody = req.body;
      const product = await ProductService.updateProduct(
        productId,
        productBody
      );
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteProduct(req, res) {
    try {
      ProductService.deleteProduct(req.params.id);
      res.status(204).send({ message: "Success, product deleted!" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
