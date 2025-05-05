import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // If the field is not present in the initial request, do not create it as undefined
      transformOptions: {
        exposeUnsetFields: false,
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
