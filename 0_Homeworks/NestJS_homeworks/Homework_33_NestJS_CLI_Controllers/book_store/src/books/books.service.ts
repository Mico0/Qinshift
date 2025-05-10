import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { Book } from './interfaces/books.interface';
import { CreateBookInterface } from './interfaces/create-book.interface';
import { v4 as uuid } from 'uuid';
import { UpdateBookInterface } from './interfaces/update-book.interface';
import { async } from 'rxjs';
import { BookFilters } from './interfaces/book-filters.interface';

@Injectable()
export class BooksService {
  private BOOKS_PATH = join(
    process.cwd(),
    'src',
    'books',
    'data',
    'books.json',
  );

  async getAllBooks(filters?: BookFilters) {
    const booksJson = await readFile(this.BOOKS_PATH, 'utf-8');

    let books = JSON.parse(booksJson) as Book[];
    if (filters?.author) {
      books = books.filter((book) =>
        book.author
          .toLowerCase()
          .includes(filters.author?.toLocaleLowerCase() as string),
      );
    }
    if (filters?.minPrice) {
      books = books.filter(
        (book) => book.price >= (filters.minPrice as number),
      );
    }

    return books;
  }

  async getById(id: string) {
    const books = await this.getAllBooks();

    const foundBook = books.find((book) => book.id === id);

    if (!foundBook) throw new NotFoundException('Book was not found');

    return foundBook;
  }

  async saveBooks(books: Book[]) {
    await writeFile(this.BOOKS_PATH, JSON.stringify(books, null, 2));
  }

  async createBook(createData: CreateBookInterface) {
    const books = await this.getAllBooks();

    const newBook = {
      id: uuid(),
      ...createData,
    };

    books.push(newBook);

    this.saveBooks(books);
  }

  async updateBook(id: string, updateData: UpdateBookInterface) {
    const books = await this.getAllBooks();

    const index = books.findIndex((book) => book.id === id);

    if (index === -1)
      throw new NotFoundException(`Book with id: ${id} not found`);

    books[index] = { ...books[index], ...updateData };

    this.saveBooks(books);

    return books[index];
  }

  async deleteBook(id: string) {
    const books = await this.getAllBooks();

    const removeBookArr = books.filter((book) => book.id !== id);
    console.log(removeBookArr);
    if (removeBookArr.length === books.length)
      throw new NotFoundException('Book was not found and removed');

    this.saveBooks(removeBookArr);
  }
}
