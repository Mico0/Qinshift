"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const uuid_1 = require("uuid");
let ProductsService = class ProductsService {
    PRODUCTS_PATH = (0, node_path_1.join)(process.cwd(), 'src', 'products', 'data', 'products.json');
    async getAllProducts() {
        const productsJSON = await (0, promises_1.readFile)(this.PRODUCTS_PATH, 'utf-8');
        const products = JSON.parse(productsJSON);
        return products;
    }
    async saveProducts(products) {
        await (0, promises_1.writeFile)(this.PRODUCTS_PATH, JSON.stringify(products, null, 2));
    }
    async getById(id) {
        const products = await this.getAllProducts();
        const foundProduct = products.find((product) => product.id === id);
        if (!foundProduct) {
            throw new common_1.NotFoundException('Product not found');
        }
        return foundProduct;
    }
    async createProduct(productData) {
        const products = await this.getAllProducts();
        const newProduct = {
            ...productData,
            id: (0, uuid_1.v4)(),
        };
        products.push(newProduct);
        await this.saveProducts(products);
        return newProduct;
    }
    async updateProduct(productId, updateData) {
        const products = await this.getAllProducts();
        const foundProduct = products.some((product) => product.id === productId);
        if (!foundProduct)
            throw new common_1.NotFoundException('Product not found');
        const updatedProducts = products.map((product) => product.id === productId ? { ...product, ...updateData } : product);
        await this.saveProducts(updatedProducts);
    }
    async deleteProduct(id) {
        const products = await this.getAllProducts();
        const updatedProducts = products.filter((product) => product.id !== id);
        if (products.length == updatedProducts.length)
            throw new common_1.NotFoundException('Product not found');
        await this.saveProducts(updatedProducts);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map