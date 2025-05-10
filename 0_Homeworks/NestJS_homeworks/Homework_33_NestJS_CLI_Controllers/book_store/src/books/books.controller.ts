import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookInterface } from './interfaces/create-book.interface';
import { UpdateBookInterface } from './interfaces/update-book.interface';
import { BookFilters } from './interfaces/book-filters.interface';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  getAllBooks(
    @Query('minPrice') minPrice: string,
    @Query('author') author: string,
  ) {
    const bookFilters: BookFilters = {
      author,
      minPrice: !Number.isNaN(Number(minPrice)) ? Number(minPrice) : null,
    };
    return this.bookService.getAllBooks(bookFilters);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.bookService.getById(id);
  }

  @Post()
  createBook(@Body() createData: CreateBookInterface) {
    return this.bookService.createBook(createData);
  }

  @HttpCode(204)
  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() updateData: UpdateBookInterface) {
    return this.bookService.updateBook(id, updateData);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteBooks(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
