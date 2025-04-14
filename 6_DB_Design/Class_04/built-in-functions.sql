-- =============================================
-- PostgreSQL Built-in Functions Examples
-- =============================================

-- Create sample tables for demonstrations
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE,
    total_amount DECIMAL(10,2),
    customer_name VARCHAR(100),
    shipping_address TEXT
);

-- Insert sample data
INSERT INTO products (name, price, description) VALUES
('Laptop', 1299.99, 'High-performance laptop'),
('Mouse', 24.99, 'Wireless mouse'),
('Keyboard', 59.99, 'Mechanical keyboard'),
('Monitor', 299.99, '27-inch 4K display'),
('Headphones', 89.99, 'Noise-cancelling headphones');

INSERT INTO orders (order_date, total_amount, customer_name, shipping_address) VALUES
('2024-01-15', 1499.99, 'John Smith', '123 Main St, City'),
('2024-02-01', 399.98, 'Jane Doe', '456 Oak Ave, Town'),
('2024-02-15', 89.99, 'Bob Wilson', '789 Pine Rd, Village'),
('2024-03-01', 2499.97, 'Alice Brown', '321 Elm St, City'),
('2024-03-15', 149.98, 'Charlie Davis', '654 Maple Dr, Town');

SELECT * FROM orders;

-- STRING FUNCTIONS
-- LENGTH and TRIMMING
SELECT 
	name,
	LENGTH(name) AS name_length,
	UPPER(name) AS uppercase_name,
	LOWER(name) AS lowecase_name
FROM products;

-- STRING CONCATENATION
SELECT
	customer_name,
	shipping_address,
	customer_name || ' - ' || shipping_address AS full_address
FROM orders;

-- SUBSTRING (In Postgres the indexes start from 1)
SELECT 
	name,
	SUBSTRING(name FROM 1 FOR 3) AS first_three_letters,
	SUBSTRING(description FROM 1 FOR 10) || '...' AS short_description
FROM products;

-- REPLACE
SELECT 
	shipping_address,
	REPLACE(shipping_address, 'City', 'Metropolis')
FROM orders;