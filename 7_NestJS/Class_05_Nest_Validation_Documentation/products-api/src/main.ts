import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      //WHitelist allows only properties with decorators
      whitelist: true,
      //Forbid throws an error if a property that doesn't exist in the dto is sent with the request
      forbidNonWhitelisted: true,

      transformOptions: {
        //This setting removes undefined props for isOptional update dto to prevent writing errors
        exposeUnsetFields: false,
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('API for managing products in a chinese warehouse')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
