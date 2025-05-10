# Homework: NestJS Validation & Documentation

## Basic Requirements

1. Create a new NestJS project for managing hotel room bookings
2. Implement a basic CRUD API for rooms with the following fields:
   - roomNumber (number, 1-999)
   - type (enum: SINGLE, DOUBLE, SUITE, DELUXE)
   - price (number)
   - isAvailable (boolean)
3. Add basic validation using class-validator decorators:
   - roomNumber: between 1 and 999
   - price: between 50 and 1000
4. Add basic Swagger documentation for all endpoints

## Advanced(BONUS) Requirements

1. Add more room fields with appropriate validation:
   - amenities (array of strings, example: ['WiFi', 'TV', 'Air Conditioning'])
   - maxOccupancy (number)
   - lastCleaned (Date)
   - maintenanceNotes (string, optional)
2. Implement query parameters for filtering rooms:
   - Search by room number
   - Filter by type
   - Filter by price range
   - Filter by availability
4. Add comprehensive Swagger documentation:
   - Detailed descriptions for all endpoints
   - Example values for all fields
   - Response schemas
   - Query parameter documentation
   - Error response documentation

## Submission Guidelines

Code needs to be placed in the already existing repo students have and sent to trainer and assistant for review within 7 days of class taking place.

## Important Notes

- Make sure to include a proper .gitignore file
- Include a Postman collection or proper Swagger documentation for testing the API
- Document all possible response types and error cases
- Include proper validation error messages