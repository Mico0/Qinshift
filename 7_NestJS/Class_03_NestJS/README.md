# NestJS CLI and Controllers

## Overview

This class introduces students to the NestJS CLI and basic controller concepts in NestJS. We'll explore how to create and structure controllers, handle HTTP requests, and implement basic CRUD operations.

## Main Topics

- NestJS CLI usage and commands
- Controller decorators and their purposes
- HTTP method decorators (@Get, @Post, @Put, @Delete)
- Parameter decorators (@Param, @Query, @Body, @Req, @Res)
- Response handling and status codes
- Route prefixes and path parameters

## CLI Commands Used

```bash
# Create a new NestJS project
nest new products-app

# Generate a controller
nest generate controller products
```

## Important Concepts

### Controller Decorators

- `@Controller()`: Defines a controller class
- `@Get()`, `@Post()`, `@Put()`, `@Patch()`, `@Delete()`: HTTP method decorators
- `@HttpCode()`: Customize HTTP status codes
- `@Header()`: Add custom headers to responses

### Parameter Decorators

- `@Param()`: Extract route parameters
- `@Query()`: Extract query string parameters
- `@Body()`: Extract request body
- `@Req()`: Access the request object
- `@Res()`: Access the response object

### Common Use Cases

- Route prefixing with `@Controller('prefix')`
- Path parameters with `:paramName`
- Query parameters with `?key=value`
- Response status codes (200, 201, 400, 404, etc.)

## Useful Links

- [NestJS Controllers Documentation](https://docs.nestjs.com/controllers)
- [NestJS CLI Documentation](https://docs.nestjs.com/cli/overview)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## Things to Know

- Controllers are responsible for handling incoming requests and returning responses
- Route parameters are defined using `:paramName` in the route path
- Query parameters are optional and accessed via `@Query()`
- Response objects (`@Res()`) give you full control over the response
- Status codes help communicate the result of operations

## Project Structure

```
src/
  ├── products/
  │   └── products.controller.ts
  ├── app.module.ts
  └── main.ts
```

## Running the Project

```bash
# Install dependencies
npm install

# Start the development server
npm run start:dev
```

The server will be available at `http://localhost:3000`