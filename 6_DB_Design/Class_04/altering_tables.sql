-- ADD CONSTRAINTS ON EXISTING TABLES
ALTER TABLE students
ADD CONSTRAINT pk_students 
PRIMARY KEY (student_id);

INSERT INTO students 
VALUES (
	7, 'Bob Bobsky', 'bob@email.com'
)

ALTER TABLE students
ADD CONSTRAINT uq_student_email UNIQUE(email);

-- Will not work because the email is duplicate
INSERT INTO students 
VALUES (
	8, 'Jane Doe', 'jane@email.com'
)

ALTER TABLE departments
ADD CONSTRAINT pk_departments 
PRIMARY KEY (dept_id);

ALTER TABLE employees
ADD CONSTRAINT pk_employees 
PRIMARY KEY (emp_id);

ALTER TABLE employees
ADD CONSTRAINT fk_employees_departments
FOREIGN KEY (dept_id) REFERENCES departments (dept_id);

ALTER TABLE courses
ADD CONSTRAINT pk_courses 
PRIMARY KEY (course_id);

ALTER TABLE student_courses
ADD CONSTRAINT pk_student_courses
PRIMARY KEY (student_id, course_id);

ALTER TABLE student_courses
ADD CONSTRAINT fk_student_courses_students
FOREIGN KEY (student_id) REFERENCES students(student_id);

ALTER TABLE student_courses
ADD CONSTRAINT fk_student_courses_courses
FOREIGN KEY (course_id) REFERENCES courses(course_id);

-- ADD NEW COLUMN ON EXISTING TABLE
ALTER TABLE departments
ADD COLUMN description VARCHAR(255);

-- STRING_AGG
SELECT 
	s.student_id,
	s.name,
	STRING_AGG(c.course_name, ', ') AS course_list
FROM 
	students s
JOIN 
	student_courses sc ON s.student_id = sc.student_id
JOIN 
	courses c ON sc.course_id = c.course_id
GROUP BY
	s.student_id,
	s.name;