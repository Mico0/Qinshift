import { BooksService } from './books.service';
export declare class BooksController {
    private bookService;
    constructor(bookService: BooksService);
    getAllBooks(): void;
}
