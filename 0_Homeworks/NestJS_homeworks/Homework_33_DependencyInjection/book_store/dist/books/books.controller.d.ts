import { BooksService } from './books.service';
import { CreateBookInterface } from './interfaces/create-book.interface';
import { UpdateBookInterface } from './interfaces/update-book.interface';
export declare class BooksController {
    private bookService;
    constructor(bookService: BooksService);
    getAllBooks(minPrice: string, author: string): Promise<import("./interfaces/books.interface").Book[]>;
    getById(id: string): Promise<import("./interfaces/books.interface").Book>;
    createBook(createData: CreateBookInterface): Promise<void>;
    updateBook(id: string, updateData: UpdateBookInterface): Promise<import("./interfaces/books.interface").Book>;
    deleteBooks(id: string): Promise<void>;
}
