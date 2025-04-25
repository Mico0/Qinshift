<<<<<<< HEAD
-- =============================================
-- Common PostgreSQL Function Use Cases
-- =============================================

-- Create sample tables for demonstrations
CREATE TABLE sales (
    sale_id SERIAL PRIMARY KEY,
    sale_date DATE,
    product_name VARCHAR(100),
    quantity INTEGER,
    unit_price DECIMAL(10,2),
    customer_email TEXT
);

CREATE TABLE inventory (
    product_name VARCHAR(100) PRIMARY KEY,
    stock_level INTEGER,
    last_updated TIMESTAMP
);

-- Insert sample data
INSERT INTO sales (sale_date, product_name, quantity, unit_price, customer_email) VALUES
('2024-01-15', 'Laptop', 2, 1299.99, 'john.doe@email.com'),
('2024-01-16', 'Mouse', 5, 24.99, 'jane.smith@email.com'),
('2024-01-16', 'Laptop', 1, 1299.99, 'bob.wilson@email.com'),
('2024-01-17', 'Keyboard', 3, 59.99, 'alice.brown@email.com'),
('2024-01-17', 'Monitor', 2, 299.99, 'charlie.davis@email.com'),
('2024-02-01', 'Laptop', 1, 1299.99, 'david.miller@email.com'),
('2024-02-02', 'Headphones', 4, 89.99, 'emma.wilson@email.com'),
('2024-02-03', 'Mouse', 3, 24.99, 'frank.thomas@email.com');

INSERT INTO inventory (product_name, stock_level, last_updated) VALUES
('Laptop', 15, '2024-03-01 10:00:00'),
('Mouse', 50, '2024-03-01 10:00:00'),
('Keyboard', 30, '2024-03-01 10:00:00'),
('Monitor', 20, '2024-03-01 10:00:00'),
('Headphones', 25, '2024-03-01 10:00:00');

SELECT * FROM sales;
SELECT * FROM inventory;

-- Stock level alert
SELECT
	product_name,
	stock_level,
	CASE 
		WHEN stock_level < 20 THEN 'Low Stock'
		WHEN stock_level < 50 THEN 'Adequate'
		ELSE 'Well stocked'
	END AS stock_status
FROM inventory
ORDER BY stock_level;

-- Sales report
SELECT
	s.product_name,
	COUNT(*) AS number_of_sales,
	SUM(s.quantity) AS total_quantity,
	TO_CHAR(AVG(s.unit_price), 'FM$999,999,99') AS average_price,
	TO_CHAR(SUM(s.quantity * s.unit_price), 'FM$999,999,99') AS total_revenue,
	i.stock_level AS current_stock,
	CASE 
		WHEN i.stock_level < SUM(s.quantity) THEN 'Re-order soon'
	ELSE
		'Stock Adequate'
	END AS inventory_status
FROM sales s
JOIN inventory i ON s.product_name = i.product_name
GROUP BY s.product_name, i.stock_level
=======
-- =============================================
-- Common PostgreSQL Function Use Cases
-- =============================================

-- Create sample tables for demonstrations
CREATE TABLE sales (
    sale_id SERIAL PRIMARY KEY,
    sale_date DATE,
    product_name VARCHAR(100),
    quantity INTEGER,
    unit_price DECIMAL(10,2),
    customer_email TEXT
);

CREATE TABLE inventory (
    product_name VARCHAR(100) PRIMARY KEY,
    stock_level INTEGER,
    last_updated TIMESTAMP
);

-- Insert sample data
INSERT INTO sales (sale_date, product_name, quantity, unit_price, customer_email) VALUES
('2024-01-15', 'Laptop', 2, 1299.99, 'john.doe@email.com'),
('2024-01-16', 'Mouse', 5, 24.99, 'jane.smith@email.com'),
('2024-01-16', 'Laptop', 1, 1299.99, 'bob.wilson@email.com'),
('2024-01-17', 'Keyboard', 3, 59.99, 'alice.brown@email.com'),
('2024-01-17', 'Monitor', 2, 299.99, 'charlie.davis@email.com'),
('2024-02-01', 'Laptop', 1, 1299.99, 'david.miller@email.com'),
('2024-02-02', 'Headphones', 4, 89.99, 'emma.wilson@email.com'),
('2024-02-03', 'Mouse', 3, 24.99, 'frank.thomas@email.com');

INSERT INTO inventory (product_name, stock_level, last_updated) VALUES
('Laptop', 15, '2024-03-01 10:00:00'),
('Mouse', 50, '2024-03-01 10:00:00'),
('Keyboard', 30, '2024-03-01 10:00:00'),
('Monitor', 20, '2024-03-01 10:00:00'),
('Headphones', 25, '2024-03-01 10:00:00');

SELECT * FROM sales;
SELECT * FROM inventory;

-- Stock level alert
SELECT
	product_name,
	stock_level, 
	CASE
		WHEN stock_level < 20 THEN 'Low Stock'
		WHEN stock_level < 40 THEN 'Adequate'
		ELSE 'Well stocked'
	END AS stock_status
FROM inventory
ORDER BY stock_level;

-- Sales report
SELECT
	s.product_name,
	COUNT(*) AS number_of_sales,
	SUM(s.quantity) AS total_quantity_sold,
	TO_CHAR(AVG(s.unit_price), 'FM$999,999,99') AS average_price,
	TO_CHAR(SUM(s.quantity * s.unit_price), 'FM$999,999,99') AS total_revenue,
	i.stock_level AS current_stock,
	CASE 
		WHEN i.stock_level < SUM(s.quantity) THEN 'Reorder soon'
		ELSE 'Stock Adequate'
	END AS inventory_status
FROM sales s
JOIN inventory i ON s.product_name = i.product_name
GROUP BY s.product_name, i.stock_level
>>>>>>> 86d16b2cb700c2f7e38e9c5991ed98dc38f2ce95
ORDER BY SUM(s.quantity * s.unit_price) DESC;