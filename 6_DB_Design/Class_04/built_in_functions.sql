-- BUILT IN FUNCTIONS

-- STRING FUNCTIONS
-- LENGTH AND TRIMMING
SELECT
	name,
	LENGTH(name) AS name_length,
	UPPER(name) AS all_uppercase,
	LOWER(name) AS all_lowercase
FROM products;

SELECT * FROM orders;


-- STRING CONCATANATION
SELECT 
	customer_name,
	shipping_address,
	customer_name || ' - ' || shipping_address AS name_and_address
FROM orders;

-- SUBSTRING (In postgres the indexes start from 1)
SELECT
	name,
	SUBSTRING(name FROM 1 FOR 3) AS first_three,
	SUBSTRING(description FROM 1 FOR 10) || '...' AS short_description
FROM products;
	