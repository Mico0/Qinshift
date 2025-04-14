-- Create a sample sales table
DROP TABLE IF EXISTS sales;
CREATE TABLE sales (
    id INTEGER,
    product_name VARCHAR(100),
    category VARCHAR(50),
    sale_date DATE,
    amount DECIMAL(8,2),
    quantity INTEGER
);

-- Insert sample data
INSERT INTO sales VALUES
    (1, 'Laptop', 'Electronics', '2024-01-15', 1200.00, 1),
    (2, 'Mouse', 'Electronics', '2024-01-15', 25.99, 2),
    (3, 'Desk', 'Furniture', '2024-01-16', 299.99, 1),
    (4, 'Laptop', 'Electronics', '2024-01-17', 1200.00, 2),
    (5, 'Chair', 'Furniture', '2024-01-17', 199.99, 4),
    (6, 'Mouse', 'Electronics', '2024-01-18', 25.99, 3),
	(7, 'Shower', 'Households', '2024-01-18', 1500.00, 3);

SELECT * FROM sales;

-- Get number of rows in the sales table
SELECT COUNT(*) from sales;

-- GROUP BY
SELECT category, COUNT(*) as total_sales
FROM sales
GROUP BY category;

SELECT product_name, COUNT(*) as total_sales
FROM sales
GROUP BY product_name;

SELECT MIN(amount) from sales;
SELECT MAX(amount) from sales;
SELECT AVG(amount) from sales;
SELECT SUM(amount) from sales;

-- Multiple columns grouping
SELECT category, product_name, COUNT(*) as times_sold
FROM sales
GROUP BY category, product_name;

-- GROUP BY with aggregate functions
SELECT
	category,
	SUM(amount) AS total_amount,
	SUM(quantity) AS total_quantity,
	COUNT(*) AS number_of_sales,
	AVG(amount) AS average_sale,
	MAX(amount) AS highest_sale,
	MIN(amount) AS lowest_sale
FROM sales
GROUP BY category;