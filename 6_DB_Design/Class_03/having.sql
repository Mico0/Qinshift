-- HAVING

SELECT * FROM sales;

-- Basic example
SELECT 
	category,
	COUNT(*) AS sale_count
FROM sales
GROUP BY category
HAVING COUNT(*) > 2;

SELECT 
	product_name,
	SUM(amount) AS total_sales
FROM sales
GROUP BY product_name
HAVING SUM(amount) > 1000;

SELECT 
	category,
	COUNT(*) AS sale_count,
	AVG(amount) as avg_sale
FROM sales
GROUP BY category
HAVING COUNT(*) > 2 AND AVG(amount) > 3;



