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

--------------------------------------------------
-- Insert sample data for one-to-one relationship
--------------------------------------------------
-- Original sample data
INSERT INTO students VALUES
    (1, 'John Doe', 'john@email.com'),
    (2, 'Jane Smith', 'jane@email.com');

INSERT INTO student_details VALUES
    (1, '123 Main St', '555-0101'),
    (2, '456 Oak Rd', '555-0102');

-- Additional sample data (existing and new)
INSERT INTO students VALUES
    (3, 'Mark Spencer', 'mark@email.com'),
    (4, 'Lucy Brown', 'lucy@email.com'),
    (5, 'Samuel Carter', 'samuel@email.com'),
    (6, 'Ella Johns', 'ella@email.com');

INSERT INTO student_details VALUES
    (3, '789 Pine Lane', '555-0103'),
    (4, '101 Maple Ave', '555-0104'),
    (5, '202 Elm St', '555-0105'),
    (6, '303 Cedar Dr', '555-0106');

--------------------------------------------------
-- Insert sample data for one-to-many relationship
--------------------------------------------------
-- Original sample data
INSERT INTO departments VALUES
    (1, 'IT'),
    (2, 'HR');

INSERT INTO employees VALUES
    (1, 'Alice Wilson', 1),
    (2, 'Bob Miller', 1),
    (3, 'Carol White', 2);

-- Additional sample data
INSERT INTO departments VALUES
    (3, 'Finance');  -- Already added extra department

INSERT INTO employees VALUES
    (4, 'David Green', 1),
    (5, 'Eva Black', 3),
    (6, 'Frank Baker', 2);

-- New additional department and employee
INSERT INTO departments VALUES
    (4, 'Marketing');  -- New department

INSERT INTO employees VALUES
    (7, 'Grace Adams', 4);  -- New employee in Marketing

--------------------------------------------------
-- Insert sample data for many-to-many relationship
--------------------------------------------------
-- Original sample data
INSERT INTO courses VALUES
    (1, 'Mathematics'),
    (2, 'Physics'),
    (3, 'Chemistry');

INSERT INTO student_courses VALUES
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3);

-- Additional sample data
INSERT INTO courses VALUES
    (4, 'Biology'),
    (5, 'History');

INSERT INTO student_courses VALUES
    (3, 1),  -- Mark Spencer takes Mathematics
    (3, 3),  -- Mark Spencer also takes Chemistry
    (4, 2),  -- Lucy Brown takes Physics
    (4, 4),  -- Lucy Brown also takes Biology
    (2, 4),  -- Jane Smith takes Biology additionally
    (1, 5);  -- John Doe takes History
