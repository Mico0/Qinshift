SELECT * FROM students;
SELECT * FROM student_details;
SELECT * FROM departments;
SELECT * FROM employees;
SELECT * FROM courses;
SELECT * FROM student_courses;

-- Basic INNER JOIN
SELECT 
	s.name,
	sd.phone
FROM students AS s
INNER JOIN student_details sd
ON  s.id = sd.student_id;

SELECT 
	e.name,
	d.dept_name
FROM employees AS e
INNER JOIN departments d
ON e.dept_id = d.dept_id;

-- LEFT JOIN
SELECT 
	s.name,
	c.course_name
FROM students s
LEFT JOIN student_courses sc
ON s.student_id = sc.student_id
LEFT JOIN courses c
ON sc.course_id = c.course_id;

 -- LEFT JOIN
 SELECT 
 	e.name,
	d.dept_name
FROM employees e
LEFT JOIN departments d
ON e.dept_id = d.dept_id;

 -- RIGHT JOIN
 SELECT 
 	e.name,
	d.dept_name
FROM employees e
RIGHT JOIN departments d
ON e.dept_id = d.dept_id;

-- FULL JOIN
SELECT 
	s.name,
	sd.phone
FROM students s
FULL JOIN student_details sd
ON s.student_id = sd.student_id;