CREATE OR REPLACE FUNCTION calculate_shipping_cost(
	weight DECIMAL,
	distance DECIMAL,
	is_express BOOLEAN DEFAULT FALSE
)
RETURNS DECIMAL AS $$
DECLARE
	base_rate DECIMAL := 5.0;
	weight_rate DECIMAL:= 0.50;
	distance_rate DECIMAL:= 0.10;
	express_multiplier DECIMAL := 1.5;
BEGIN
	RETURN (base_rate + (weight * weight_rate) + (distance * distance_rate)) *
			CASE WHEN is_express THEN express_multiplier ELSE 1 END;
END;
$$ LANGUAGE plpgsql;

-- First we need to save the function (execute it) and then call it;
-- Usage
SELECT calculate_shipping_cost(3, 100);
SELECT calculate_shipping_cost(3, 100, TRUE);

-- Function with Array Input
CREATE OR REPLACE FUNCTION calculate_average(numbers DECIMAL[])
RETURNS DECIMAL AS $$
DECLARE
    total DECIMAL := 0;
    count INTEGER := 0;
    num DECIMAL;
BEGIN
    FOREACH num IN ARRAY numbers
    LOOP
        total := total + num;
        count := count + 1;
    END LOOP;
    
    IF count = 0 THEN
        RETURN NULL;
    END IF;
    
    RETURN total / count;
END;
$$ LANGUAGE plpgsql;

-- Usage
-- SELECT calculate_average(ARRAY[1, 2, 3, 4, 5]); -- Returns 3

-- Function with Error Handling
CREATE OR REPLACE FUNCTION safe_divide(numerator DECIMAL, denominator DECIMAL)
RETURNS DECIMAL AS $$
BEGIN
    IF denominator = 0 THEN
        RAISE EXCEPTION 'Division by zero';
    END IF;
    RETURN numerator / denominator;
END;
$$ LANGUAGE plpgsql;

-- Usage:
-- SELECT safe_divide(10, 2); -- Returns 5
-- SELECT safe_divide(10, 0); -- Raises exception

-- Basic Scalar Function
CREATE OR REPLACE FUNCTION calculate_discount(price DECIMAL, discount_percent DECIMAL)
RETURNS DECIMAL AS $$
BEGIN
    RETURN price * (1 - discount_percent/100);
END;
$$ LANGUAGE plpgsql;

-- Usage:
-- SELECT calculate_discount(100, 20); -- Returns 80

-- Table-valued function (a function that returns a table as a result)
CREATE OR REPLACE FUNCTION get_total_sales_per_product()
RETURNS TABLE (
	product_name VARCHAR,
	total_quantity INTEGER,
	total_revenue NUMERIC(10, 2)
)
LANGUAGE plpgsql
AS $$
BEGIN
	RETURN QUERY
	SELECT
		s.product_name,
		SUM(s.quantity)::INTEGER AS total_quantity,
		SUM(s.quantity * s.unit_price) AS total_revenue
	FROM sales s
	GROUP BY s.product_name
	ORDER BY total_revenue DESC;
END;
$$;

-- Usage
SELECT * FROM get_total_sales_per_product();
	


