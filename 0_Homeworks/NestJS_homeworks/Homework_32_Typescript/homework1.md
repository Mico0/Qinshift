# TypeScript Basics Homework

## Deadline

Submit your homework no later than 7 days from today

## Basic Requirements

Create a simple TypeScript application that demonstrates your understanding of basic TypeScript concepts:

1. Create a `Student` interface with the following properties:

   - `id` (number)
   - `name` (string)
   - `age` (number)
   - `grades` (array of numbers)

2. Create a function `calculateAverageGrade` that:

   - Takes an array of students as input
   - Returns the average grade across all students
   - Uses proper type annotations

3. Create an enum `GradeLevel` with values:

   - `FRESHMAN`
   - `SOPHOMORE`
   - `JUNIOR`
   - `SENIOR`

4. Create a function `getGradeLevel` that:
   - Takes a student's age as input
   - Returns the appropriate `GradeLevel` enum value
   - Uses type assertions where necessary

## Advanced Requirements

1. Create a `Course` interface with:

   - `id` (number)
   - `name` (string)
   - `students` (array of Student)
   - `instructor` (string)
   - `maxStudents` (number)

2. Implement a `CourseManager` class that:

   - Has a private array of courses
   - Has methods to:
     - Add a new course
     - Remove a course by ID
     - Get course by ID
     - Get all courses
   - Uses proper TypeScript access modifiers

3. Create a function `getTopStudents` that:
   - Takes a course ID and number N as parameters
   - Returns the top N students by average grade
   - Uses proper type annotations and error handling