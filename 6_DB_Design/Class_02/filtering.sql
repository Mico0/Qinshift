SELECT * FROM sales_2023;
SELECT * FROM sales_2024;

SELECT * FROM products;
-- NULL value filtering
SELECT * FROM products
WHERE description IS NOT NULL;

SELECT * FROM products
WHERE last_restock_date IS NULL;

-- Multiple conditions
SELECT * FROM products
WHERE category = 'Electronics'
AND price < 100
AND last_restock_date IS NOT NULL;

SELECT * FROM products
WHERE category = 'Furniture'
AND (price > 20 OR stock_count = 20);

SELECT * FROM products
WHERE last_restock_date 
BETWEEN '2024-01-01' AND '2024-01-31';

-- Complex statement IN
SELECT * FROM products 
WHERE category IN('Electronics', 'Appliances')
AND stock_count > 8;

