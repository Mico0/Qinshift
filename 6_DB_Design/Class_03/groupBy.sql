-- Create a sample sales table
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
    (6, 'Mouse', 'Electronics', '2024-01-18', 25.99, 3);

-- Get number of rows in the sales table
SELECT COUNT (*) FROM sales;
-- GROUP BY 
SELECT category, COUNT  (*) as total_sales
FROM sales
GROUP BY category;

SELECT product_name, COUNT  (*) as total_sales
FROM sales
GROUP BY product_name;

SELECT MIN (amount) from sales;
SELECT MAX (amount) from sales;
SELECT AVG (amount) from sales;
SELECT SUM (amount) from sales;
SELECT SUM (amount) from sales;

-- MULTI COLUMN GROUPING
SELECT category, product_name, COUNT (*) AS times_sold
FROM sales
GROUP BY category, product_name;

-- GROUP BY with aggregate functions
SELECT
	category,
	SUM (amount) as total_amount,
	SUM (quantity) as total_quantity,
	COUNT (*) as number_of_sales,
	AVG (amount) as average_sale,
	MAX (amount) as highest_sale,
	MIN (amount) as lowest_sale
FROM sales
GROUP BY category;

-- HAVING CAN ONLY BE USED WITH GROUP BY, WHERE FILTERS THE TABLE, HAVING FILTERS THE RESULT AFTER ITS GROUPED BY
