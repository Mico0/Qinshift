import Product from "../models/models.js";

export default class ProductService {
  constructor() {
    this.baseUrl =
      "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Class15/data/products.json";
    this.productPerCategory = new Map();
  }

  async getProductByCategoryId(categoryId, page, pageSize) {
    let response = await fetch(this.baseUrl);
    let data = await response.json();
    if (this.productPerCategory.has(categoryId)) {
      const result = this.productPerCategory.get(categoryId);
      const pagedProducts = result.products.slice(
        (page - 1) * pageSize,
        (page - 1) * pageSize + pageSize
      );
      return {
        ...result,
        products: pagedProducts,
      };
    }
    const mappedData = data
      .filter((x) => x.category.id === +categoryId)
      .map(
        (x) => new Product(x.id, x.title, x.price, x.description, x.category.id)
      );
    console.log("Mapped data:", mappedData);
    if (Number(categoryId) === 0) {
      const products = data.map(
        (x) => new Product(x.id, x.title, x.price, x.description, x.category.id)
      );
      this.productPerCategory.set(categoryId, {
        total: products.length,
        products: products,
      });
    } else {
      this.productPerCategory.set(categoryId, {
        total: mappedData.length,
        products: mappedData,
      });
    }

    const result = this.productPerCategory.get(categoryId);
    console.log("Result: ", result);
    const pagedProducts = result.products.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    return {
      ...result,
      products: pagedProducts,
    };
  }

  getProductsByIds(productIds) {
    return fetch(this.baseUrl)
      .then((res) => res.json())
      .then((data) => {
        return data
          .filter((x) => productIds.includes(x.id))
          .map(
            (x) =>
              new Product(x.id, x.title, x.price, x.description, x.category.id)
          );
      });
  }
}
