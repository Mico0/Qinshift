-- Create tables for one-to-one relationship example
CREATE TABLE students (
    student_id INTEGER,
    name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE student_details (
    student_id INTEGER,
    address VARCHAR(200),
    phone VARCHAR(20)
);

-- Create tables for one-to-many relationship example
CREATE TABLE departments (
    dept_id INTEGER,
    dept_name VARCHAR(100)
);

CREATE TABLE employees (
    emp_id INTEGER,
    name VARCHAR(100),
    dept_id INTEGER
);

-- Create tables for many-to-many relationship example
CREATE TABLE courses (
    course_id INTEGER,
    course_name VARCHAR(100)
);

CREATE TABLE student_courses (
    student_id INTEGER,
    course_id INTEGER
);

-- Insert sample data for one-to-one relationship
INSERT INTO students VALUES
    (1, 'John Doe', 'john@email.com'),
    (2, 'Jane Smith', 'jane@email.com');

INSERT INTO student_details VALUES
    (1, '123 Main St', '555-0101'),
    (2, '456 Oak Rd', '555-0102');

-- Insert sample data for one-to-many relationship
INSERT INTO departments VALUES
    (1, 'IT'),
    (2, 'HR');

INSERT INTO employees VALUES
    (1, 'Alice Wilson', 1),
    (2, 'Bob Miller', 1),
    (3, 'Carol White', 2);

-- Insert sample data for many-to-many relationship
INSERT INTO courses VALUES
    (1, 'Mathematics'),
    (2, 'Physics'),
    (3, 'Chemistry');

INSERT INTO student_courses VALUES
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3); 