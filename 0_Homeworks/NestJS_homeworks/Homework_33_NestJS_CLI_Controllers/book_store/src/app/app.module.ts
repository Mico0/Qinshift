import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from 'src/books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
