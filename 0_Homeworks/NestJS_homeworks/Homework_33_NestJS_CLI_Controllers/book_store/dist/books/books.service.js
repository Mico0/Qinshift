"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const uuid_1 = require("uuid");
let BooksService = class BooksService {
    BOOKS_PATH = (0, path_1.join)(process.cwd(), 'src', 'books', 'data', 'books.json');
    async getAllBooks(filters) {
        const booksJson = await (0, promises_1.readFile)(this.BOOKS_PATH, 'utf-8');
        let books = JSON.parse(booksJson);
        if (filters?.author) {
            books = books.filter((book) => book.author
                .toLowerCase()
                .includes(filters.author?.toLocaleLowerCase()));
        }
        if (filters?.minPrice) {
            books = books.filter((book) => book.price >= filters.minPrice);
        }
        return books;
    }
    async getById(id) {
        const books = await this.getAllBooks();
        const foundBook = books.find((book) => book.id === id);
        if (!foundBook)
            throw new common_1.NotFoundException('Book was not found');
        return foundBook;
    }
    async saveBooks(books) {
        await (0, promises_1.writeFile)(this.BOOKS_PATH, JSON.stringify(books, null, 2));
    }
    async createBook(createData) {
        const books = await this.getAllBooks();
        const newBook = {
            id: (0, uuid_1.v4)(),
            ...createData,
        };
        books.push(newBook);
        this.saveBooks(books);
    }
    async updateBook(id, updateData) {
        const books = await this.getAllBooks();
        const index = books.findIndex((book) => book.id === id);
        if (index === -1)
            throw new common_1.NotFoundException(`Book with id: ${id} not found`);
        books[index] = { ...books[index], ...updateData };
        this.saveBooks(books);
        return books[index];
    }
    async deleteBook(id) {
        const books = await this.getAllBooks();
        const removeBookArr = books.filter((book) => book.id !== id);
        console.log(removeBookArr);
        if (removeBookArr.length === books.length)
            throw new common_1.NotFoundException('Book was not found and removed');
        this.saveBooks(removeBookArr);
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
//# sourceMappingURL=books.service.js.map