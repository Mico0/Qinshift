-- Create a view that shows each employee’s ID, name, and department name by joining the existing employees and departments tables
CREATE VIEW employee_details
AS
SELECT 
	e.emp_id,
	e.name,
	d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id;

SELECT * FROM employee_details;

-- Create a view that calculates the total number of employees per department by joining the departments table with employees
CREATE VIEW department_statistics AS
SELECT 
    d.dept_name,
    COUNT(e.emp_id) AS employee_count
FROM departments d
JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_name;

SELECT * FROM department_statistics;

-- UPDATEABLE VIEWS
CREATE VIEW it_employees
AS
SELECT
	emp_id,
	name,
	dept_id
FROM employees
WHERE dept_id = 1
WITH CHECK OPTION; -- -- The addition of WITH CHECK OPTION enforces that any modifications (like INSERT or UPDATE) done through this view must satisfy the view’s filtering condition

SELECT * FROM it_employees;

INSERT INTO it_employees (emp_id, name, dept_id)
-- VALUES (10, 'Employee 1', 1);
VALUES (11, 'Employee 2', 2);
