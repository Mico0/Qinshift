# Products API

This project demonstrates a NestJS application with validation and API documentation features. It showcases how to create a simple product API with proper validation and Swagger documentation.

## Key Concepts Covered

### Class Validator

[class-validator](https://github.com/typestack/class-validator) is a library that allows you to use decorator-based validation in your NestJS applications. It provides a set of decorators to validate object properties based on certain constraints.

#### How to Implement:

1. Install the required packages:

```bash
npm install class-validator class-transformer
```

2. Enable validation in your main.ts:

```typescript
import { ValidationPipe } from "@nestjs/common";

app.useGlobalPipes(new ValidationPipe());
```

3. Add validation decorators to your DTOs:

```typescript
import {
  IsArray,
  IsNumber,
  IsObject,
  IsString,
  Length,
  Min,
  ValidateNested,
} from "class-validator";

export class CreateProductDto {
  @ApiProperty({
    description: "title of the product",
    example: "shoes",
  })
  @IsString()
  @Length(3, 30)
  title: string;

  @ApiProperty({
    description: "starting stock",
    example: 300,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  stock: number;
}
```

### Swagger Documentation

[Swagger](https://swagger.io/) (OpenAPI) is a tool that helps you design, build, document, and consume REST APIs. NestJS provides an integrated module `@nestjs/swagger` to generate API documentation automatically.

#### How to Implement:

1. Install the Swagger package:

```bash
npm install @nestjs/swagger swagger-ui-express
```

2. Set up Swagger in your main.ts:

```typescript
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const config = new DocumentBuilder()
  .setTitle("Products Api")
  .setDescription("Api for managing products in a chinese warehouse")
  .setVersion("1.0")
  .addTag("products")
  .build();

const document = SwaggerModule.createDocument(app, config);

SwaggerModule.setup("api", app, document);
```

3. Decorate your controllers and DTOs:

```typescript
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiOperation({ summary: 'Get all products' })
@ApiResponse({ status: 200, description: 'Returns all products' })
@Get()
findAll() {
    // ...
}
```

4. Enhance DTOs with documentation:

```typescript
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({
    description: "The title of the product",
    example: "New Product",
    minLength: 5,
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  title: string;
  // ...
}
```

## Project Structure

- **Controller**: Handles HTTP requests and returns responses
- **Service**: Contains business logic
- **DTOs**: Define data shapes for API requests with validation
- **Interfaces**: Define data models

## Running the Application

1. Install dependencies:

```bash
npm install
```

2. Start the application:

```bash
npm run start:dev
```

3. Access the Swagger documentation:

```
http://localhost:3000/docs
```

## Key Features

1. **Data Validation**: Input validation using class-validator
2. **API Documentation**: Comprehensive API documentation using Swagger
3. **Modular Architecture**: Separation of concerns with NestJS modules

## Examples

### Validation Example

```typescript
@IsNotEmpty()
@IsString()
@MinLength(5)
@MaxLength(100)
title: string;
```

This ensures that:

- Title cannot be empty
- Title must be a string
- Title must be at least 5 characters
- Title cannot exceed 100 characters

### Swagger Documentation Example

```typescript
@ApiOperation({ summary: "Get product by id." })
@ApiResponse({ status: 200, description: 'Returns product by id.' })
@ApiParam({ name: 'id', description: 'The id of the product we search.' })
@Get(':id')
findById(@Param('id') id: string) {
    return this.productsService.getProductById(productId);
}
```
