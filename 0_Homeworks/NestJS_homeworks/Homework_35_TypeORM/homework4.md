# Movie App - TypeORM with PostgreSQL

## Basic Requirements

### Database Setup

- Create a PostgreSQL database for the movie app
- Set up TypeORM configuration with proper environment variables
- Create a separate DatabaseModule for TypeORM configuration

### Entities

Movie Entity

- id (UUID, primary key)
- title (string)
- description (string)
- release_year (number)
- genre (enum: action, comedy, drama, horror, sci_fi, romance, documentary, animation, thriller, fantasy)
- duration (number, in minutes)
- rating (number, 1-10)
- poster_url (string, optional)
- created_at (timestamp)
- updated_at (timestamp)

### Basic CRUD Operations

- Create new movie
- Get all movies with filtering and sorting
- Get movie by ID
- Update movie
- Delete movie

### Validation

- Add proper validation for all DTOs using class-validator
- Implement proper error handling
- Use class-transformer for data transformation

## Advanced Requirements

### Movie Features

1. Implement filtering:

   - Filter movies by genre
   - Filter movies by minimum rating (1-10)
   - Filter movies by maximum duration
   - Search movies by title

2. Add sorting capabilities:
   - Sort by release year (default, DESC)
   - Sort by rating
   - Sort by duration

## Technical Requirements

1. Use TypeORM with PostgreSQL
2. Implement proper validation using class-validator
3. Use Swagger for API documentation
4. Follow naming conventions:
   - Use snake_case for database properties
   - Use camelCase for TypeScript properties
   - Use PascalCase for classes and interfaces
   - Use kebab-case for files and folders

## Environment Setup

Create a `.env` file with the following variables:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=movies_db # DO NOT CHANGE THIS
NODE_ENV=development
PORT=3000
```

## Submission Guidelines

Code needs to be placed in the already existing repo students have and sent to trainer and assistant for review within 7 days of class taking place.

## Important Notes

- Include proper .gitignore file
- Provide Swagger documentation for all endpoints
- Follow the common naming conventions
- Implement proper error handling
- Use TypeORM best practices
- Use proper HTTP status codes
- Implement proper validation for all inputs