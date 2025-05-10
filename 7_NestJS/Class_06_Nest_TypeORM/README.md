# TypeORM with PostgreSQL in NestJS

## Overview

This class covers the integration of TypeORM (TypeScript ORM) with PostgreSQL in NestJS applications. TypeORM is a powerful ORM that helps manage database operations using TypeScript decorators and entities.

## Key Concepts

### TypeORM

- An Object-Relational Mapping (ORM) library for TypeScript and JavaScript
- Supports multiple databases (PostgreSQL, MySQL, SQLite, etc.)
- Uses decorators to define entities and relationships
- Provides type safety and better developer experience

### PostgreSQL

- A powerful, open-source object-relational database system
- Known for reliability, data integrity, and extensibility
- Excellent for complex queries and data relationships

## Common Use Cases

1. Database Entity Definition
2. Relationship Management
3. CRUD Operations
4. Query Building
5. Migration Management
6. Data Validation

## Why is it Important?

- Type safety in database operations
- Reduced boilerplate code
- Better maintainability
- Built-in support for migrations
- Active community and regular updates

## Things to Know

- Entity decorators (@Entity, @Column, @PrimaryGeneratedColumn)
- Relationship decorators (@OneToMany, @ManyToOne, @ManyToMany)
- Repository pattern
- Query Builder
- Migration management

## Useful Links

- [TypeORM Documentation](https://typeorm.io/)
- [NestJS TypeORM Integration](https://docs.nestjs.com/techniques/database)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## CLI Commands Used

```bash
# Create new NestJS project
nest new products-api

# Install required dependencies
npm install @nestjs/typeorm typeorm pg class-validator class-transformer @nestjs/swagger

# Generate resources
nest g resource products
nest g resource users
```

## Setup Instructions

1. Install PostgreSQL on your system
2. Create a new database
3. Configure environment variables
4. Install project dependencies
5. Run migrations
6. Start the application

## Environment Variables

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=products_db
```

## Testing the Application

- Use the provided Postman collection
- Access Swagger documentation at `/api`
- Test all CRUD operations
- Verify relationships and filters