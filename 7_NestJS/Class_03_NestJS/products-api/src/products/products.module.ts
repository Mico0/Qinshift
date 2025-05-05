import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [LoggerModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
