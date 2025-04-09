CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    enrollment_date DATE
);

CREATE TABLE subjects (
    subject_id SERIAL PRIMARY KEY,
    subject_name VARCHAR(100) NOT NULL,
    student_id INTEGER,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

-- The UNIQUE on student_id enforces that no two profiles can reference the same student – that’s how you create a one-to-one relationship in SQL.
CREATE TABLE student_profiles (
    profile_id SERIAL PRIMARY KEY,
    student_id INTEGER UNIQUE,
    bio TEXT,
    linkedin VARCHAR(100),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

-- Add students
INSERT INTO students (name, email, enrollment_date) VALUES 
('Alice Johnson', 'alice@email.com', '2024-09-01'),
('Bob Smith', 'bob@email.com', '2024-09-01');
('Bob Bobsky', 'bob123@email.com', '2024-09-01');

-- Add subjects
INSERT INTO subjects (subject_name, student_id) VALUES
('Databases', 1),
('NodeJS', 2),
('JavaScript', 2)

INSERT INTO subjects (subject_name, student_id) VALUES
('JavaScript', 3)

-- Add profiles (one to one)
INSERT INTO student_profiles (student_id, bio, linkedin) VALUES 
(2, 'Data science student', 'blabla123')


SELECT * FROM subjects