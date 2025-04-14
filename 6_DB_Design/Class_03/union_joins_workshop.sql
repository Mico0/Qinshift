SELECT * FROM sales;
SELECT * FROM sales_2023;
SELECT * FROM sales_2024;
SELECT * FROM products;

-- Create a sample table
DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id INTEGER,
    name VARCHAR(100),
    price DECIMAL(8,2),
    category VARCHAR(50),
    stock_count INTEGER,
    last_restock_date DATE,
    description TEXT,
	discount_price DECIMAL(8,2),
	weight DECIMAL(6, 2)
);

-- Insert sample data
INSERT INTO products VALUES
    (1, 'Laptop Pro', 1200.00, 'Electronics', 5, '2024-01-15', 'High-end laptop', 999.99, 2.50),
    (2, 'Office Chair', 199.99, 'Furniture', 12, '2024-02-01', NULL, 149.99, 15.00),
    (3, 'Coffee Maker', 79.99, 'Appliances', 8, '2024-01-20', 'Automatic drip', 59.99, 3.20),
    (4, 'Gaming Mouse', 59.99, 'Electronics', 15, NULL, 'RGB gaming mouse', 49.99, 0.25),
    (5, 'Desk Lamp', 25.00, 'Furniture', 20, '2024-02-10', 'LED desk lamp', 19.99, 1.10),
    (6, 'Keyboard', 89.99, 'Electronics', 10, '2024-01-10', 'Mechanical keyboard', 69.99, 1.50);

DROP TABLE IF EXISTS sales_2023;
CREATE TABLE sales_2023 (
    sale_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    amount DECIMAL(8,2),
    sale_date DATE
);

DROP TABLE IF EXISTS sales_2024;
CREATE TABLE sales_2024 (
    sale_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    amount DECIMAL(8,2),
    sale_date DATE
);

-- Sales for 2023
INSERT INTO sales_2023 VALUES
    (101, 1, 1, 1200.00, '2023-05-12'),  -- Laptop Pro
    (102, 2, 2, 399.98, '2023-06-20'),  -- Office Chair
    (103, 3, 1, 79.99,  '2023-07-15'),  -- Coffee Maker
    (104, 6, 1, 89.99,  '2023-08-30');  -- Keyboard

-- Sales for 2024
INSERT INTO sales_2024 VALUES
    (201, 1, 1, 1200.00, '2024-01-10'), -- Laptop Pro
    (202, 4, 1, 59.99,  '2024-02-14'),  -- Gaming Mouse
    (203, 5, 2, 50.00,  '2024-03-01'),  -- Desk Lamp
    (204, 3, 1, 79.99,  '2024-03-10');  -- Coffee Maker


-- Combine product names from both sales tables for 2023 and 2024 WITH duplicates
SELECT p.name
FROM sales_2023 s
JOIN products p 
ON s.product_id = p.id

UNION ALL

SELECT p.name
FROM sales_2024 s
JOIN products p 
ON s.product_id = p.id

-- Combine product names from both sales tables for 2023 and 2024 WITHOUT duplicates
SELECT p.name
FROM sales_2023 s
JOIN products p 
ON s.product_id = p.id

UNION

SELECT p.name
FROM sales_2024 s
JOIN products p 
ON s.product_id = p.id

-- Get products names that were sold in both 2023 and 2024
SELECT p.name
FROM sales_2023 s
JOIN products p 
ON s.product_id = p.id

INTERSECT

SELECT p.name
FROM sales_2024 s
JOIN products p 
ON s.product_id = p.id

-- Get products names that were sold in 2023 but were not sold in 2024
SELECT p.name
FROM sales_2023 s
JOIN products p 
ON s.product_id = p.id

EXCEPT

SELECT p.name
FROM sales_2024 s
JOIN products p 
ON s.product_id = p.id

-- Combine product names from both sales tables for 2023 and 2024 WITHOUT duplicates whose amount was above 100$
SELECT p.name
FROM sales_2023 s
JOIN products p 
ON s.product_id = p.id
WHERE s.amount > 100

UNION

SELECT p.name
FROM sales_2024 s
JOIN products p 
ON s.product_id = p.id
WHERE s.amount > 100;