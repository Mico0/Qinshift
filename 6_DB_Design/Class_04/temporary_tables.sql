-- TEMPORARY TABLES
CREATE TEMPORARY TABLE temp_it_employees
AS
SELECT 
	e.emp_id,
	e.name,
	d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE d.dept_name = 'IT';

SELECT * FROM temp_it_employees;

-- TEMP TABLE WITH ADDITIONAL CALCULATIONS
CREATE TEMPORARY TABLE temp_department_metrics
AS
SELECT
	d.dept_name,
	COUNT (*) as employee_count
FROM departments d
JOIN employees e ON d.dept_id = e.dept_Id
GROUP by d.dept_name;

SELECT * FROM temp_department_metrics;

-- ALTER TEMP TABLE ( add new column )
ALTER TABLE temp_department_metrics
ADD COLUMN note VARCHAR(100);

-- update the note column (UPDATE....SET) (INSERT INTO...VALUES)
UPDATE temp_department_metrics
SET note = 'Department:'|| dept_name || ', Count: ' || employee_count;

-- LIST ALL TEMP TABLES
SELECT schemaname, tablename
FROM pg_catalog.pg_tables
WHERE schemaname LIKE 'pg_temp%';