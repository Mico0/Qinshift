import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { Book } from './interfaces/books.interface';

@Injectable()
export class BooksService {
  private BOOKS_PATH = join(
    process.cwd(),
    'src',
    'books',
    'data',
    'books.json',
  );

  async getAllBooks() {
    const booksJson = await readFile(this.BOOKS_PATH, 'utf-8');

    const books = JSON.parse(booksJson) as Book[];

    console.log(books);
  }
}
