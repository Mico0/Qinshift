# Homework 5 - Relations and Auth for Movie App

This is a continuation of the previous homework.

To be able to complete this homework you will need to have the [previous one](https://github.com/qa-codecademy/mkwd13-js-07-nestjs/blob/main/G1/class07-typeorm-relations/homework4.md) done.

The goal of this homework is to add relations and authentication to the movie app.

## Relations
### Basic Requirement
#### Director - Movie (One-to-Many)

1. Create a new entity ```director``` with properties ```id, fullName, birthYear```
2. One director can direct many movies
3. A movie belongs to one director

### Bonus
#### Movie - Actor (Many-to-Many)

1. Create a new entity ```actor```
2. Properties: ```id, fullName, birthYear```
3. A movie can have many actors
4. An actor can act in many movies

## Authentication
### Basic Requirement

1. Create users
2. Create endpoints to register and login users.
3. Users should be able to register and login to the application.
4. Use JWT for authentication.
5. Use guards to protect routes that require authentication (all routes except GET methods should only be available to logged-in users).

### Bonus (We will show this on Monday, but you can try to solve it until then)

1. Add a role based authentication. Users should have roles (```admin``` and ```user```):
   - Admins can do everything (```GET, CREATE, UPDATE, DELETE```)
   - Users can only view movies (```GET```)
2. Add createdBy property which will be the email (username) of the user that created the movie.

## Before you send it...

- Don't forget to test your api with Postman and send us the Postman collection.
- Don't forget to add a .gitignore file to your project and add /node_modules to it.

## Submission Guidelines

Code needs to be placed in the already existing repo students have and sent to trainer and assistant for review within 7 days of class taking place.
