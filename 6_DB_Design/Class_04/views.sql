CREATE VIEW employee_details
AS
SELECT e.emp_id, e.name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id;

SELECT * FROM employee_details;

CREATE VIEW department_statistics
AS
SELECT 
	d.dept_name,
	COUNT (e.emp_id) AS employee_count
FROM departments AS d
JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_name;

SELECT * FROM department_statistics;

-- UPDATEABLE VIEW
CREATE VIEW it_employees
AS
SELECT
	emp_id,
	name,
	dept_id
FROM employees
WHERE dept_id = 1
WITH CHECK OPTION;

SELECT * FROM it_employees;

INSERT INTO it_employees (emp_id,name,dept_id)
VALUES (11,'Employee 1', 1);
VALUES ('Employee 2', 2);