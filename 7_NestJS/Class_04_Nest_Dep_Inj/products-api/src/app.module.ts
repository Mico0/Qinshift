import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  //When a child/feature module is imported in the app module, the app module executes the code from the child module
  imports: [ProductsModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
