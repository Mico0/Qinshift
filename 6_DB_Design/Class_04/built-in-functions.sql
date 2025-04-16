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
('Headphones', 89.99, 'Noise-cancelling headphones'),
('Headphones New', 99.99, null);

INSERT INTO orders (order_date, total_amount, customer_name, shipping_address) VALUES
('2024-01-15', 1499.99, 'John Smith', '123 Main St, City'),
('2024-02-01', 399.98, 'Jane Doe', '456 Oak Ave, Town'),
('2024-02-15', 89.99, 'Bob Wilson', '789 Pine Rd, Village'),
('2024-03-01', 2499.97, 'Alice Brown', '321 Elm St, City'),
('2024-03-01', null, 'Alice Smith', '321 Nightmare St, City'),
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

-- NUMERIC FUNCTIONS
-- Basic math
SELECT
	price,
	ROUND(price) AS rounded_price,
	CEIL(price) AS  ceiling_price,
	FLOOR(price) AS floor_price
FROM products;

-- Aggregation always returns one row as result
SELECT
	COUNT(*) as total_products,
	SUM(price) AS total_value,
	AVG(price) AS average_price,
	MIN(price) AS min_price,
	MAX(price) AS max_price
FROM products;

-- DATE/TIME FUNCTIONS
-- Current date/time
SELECT
	CURRENT_DATE AS today,
	CURRENT_TIME AS now_time,
	CURRENT_TIMESTAMP AS now_complete,
	LOCALTIME AS local_time,
	LOCALTIMESTAMP AS local_time_stamp;

-- Date parts
SELECT
	order_date,
	EXTRACT(YEAR FROM order_date) AS year,
	EXTRACT(MONTH FROM order_date) AS month,
	EXTRACT(DAY FROM order_date) AS day,
	EXTRACT(DOW FROM order_date) as dow
FROM orders;

-- Date formatting
SELECT
	order_date,
	TO_CHAR(order_date, 'Month DD YYYY') AS formated_date,
	TO_CHAR(order_date, 'MM/DD/YY') AS us_format,
	TO_CHAR(order_date, 'YYYY-MM-DD') AS iso_format,
	TO_CHAR(order_date, 'Day') AS day_name
FROM orders;

-- CONDITIONAL FUNCTIONS
-- COALESCE ( returns first non-null value ) 
SELECT 
	name,
	description,
	COALESCE(description, 'No description available') AS safe_description
FROM products;

-- NULLIF ( returns null if arguments are equal ) ( accepts only fixed values )
SELECT
	total_amount,
	NULLIF(total_amount, 0) AS non_zero_amount
FROM orders;

-- GREATEST and LEAST
SELECT
	name,
	price,
	GREATEST(price, 100) AS price_off_hundred, 
	LEAST(price, 100) AS lower_of_two
FROM products;

-- REVERSE DATE CONVERSION
SELECT
	TO_DATE('2024-05-29', 'YYYY-MM-DD') AS to_date_conversion,
	TO_TIMESTAMP('2025-01-15 10:30:00','YYYY-MM-DD-HH24-MI-SS') AS text_to_timestamp;

-- CONVERTING NUMBER TO STRINGS
SELECT
	price,
	price::TEXT AS price_text,
	TO_CHAR(price, '9999D99') AS formatted_price
FROM products;
