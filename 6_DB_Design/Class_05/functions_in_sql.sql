CREATE OR REPLACE FUNCTION calculate_shipping_cost(
	weight DECIMAL,
	distance DECIMAL,
	is_express BOOLEAN DEFAULT FALSE -- Assigning default value toa variable
	-- INPUT ARGUMENTS
)

RETURNS DECIMAL AS $$
DECLARE
	base_rate DECIMAL := 5.0;
	weight_rate DECIMAL :=0.50;
	distance_rate DECIMAL := 010;
	express_multiplier DECIMAL :=1.5;
-- VARIABLES
BEGIN
	RETURN (base_rate + (weight * weight_rate) + (distance * distance_rate)) *
		CASE WHEN is_express THEN express_multiplier ELSE 1 END;
END;
$$ LANGUAGE plpgsql;

SELECT calculate_shipping_cost(3,100, TRUE);

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

SELECT * FROM get_total_sales_per_product();