import { Book } from './interfaces/books.interface';
import { CreateBookInterface } from './interfaces/create-book.interface';
import { UpdateBookInterface } from './interfaces/update-book.interface';
import { BookFilters } from './interfaces/book-filters.interface';
export declare class BooksService {
    private BOOKS_PATH;
    getAllBooks(filters?: BookFilters): Promise<Book[]>;
    getById(id: string): Promise<Book>;
    saveBooks(books: Book[]): Promise<void>;
    createBook(createData: CreateBookInterface): Promise<void>;
    updateBook(id: string, updateData: UpdateBookInterface): Promise<Book>;
    deleteBook(id: string): Promise<void>;
}
