-- Tables
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    category_id INTEGER
);

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    product_count INTEGER DEFAULT 0
);

CREATE TABLE audit_log (
    log_id SERIAL PRIMARY KEY,
    table_name VARCHAR(50),
    record_id INTEGER,
    action VARCHAR(20),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE price_change_notifications (
    notification_id SERIAL PRIMARY KEY,
    product_id INTEGER,
    old_price DECIMAL(10,2),
    new_price DECIMAL(10,2),
    change_percentage DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger functions
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
	NEW.updated_at = CURRENT_TIMESTAMP;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION audit_changes()
RETURNS TRIGGER AS $$
BEGIN
	INSERT INTO audit_log (table_name, record_id, action)
	VALUES (TG_TABLE_NAME, COALESCE(NEW.product_id, OLD.product_id), TG_OP);
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_product_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE categories SET product_count = product_count + 1 WHERE category_id = NEW.category_id;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE categories SET product_count = product_count - 1 WHERE category_id = OLD.category_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION notify_price_change()
RETURNS TRIGGER AS $$
DECLARE
    change_percent DECIMAL(5,2);
BEGIN
    change_percent := ((NEW.price - OLD.price) / OLD.price * 100)::DECIMAL(5,2);
    IF ABS(change_percent) > 20 THEN
        INSERT INTO price_change_notifications 
            (product_id, old_price, new_price, change_percentage)
        VALUES 
            (NEW.product_id, OLD.price, NEW.price, change_percent);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION validate_price_change()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.price < (OLD.price * 0.5) THEN
        RAISE EXCEPTION 'Price cannot be reduced by more than 50%%';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers
CREATE TRIGGER trg_update_timestamp
BEFORE UPDATE ON products
FOR EACH ROW 
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER trg_audit_products
AFTER INSERT OR UPDATE OR DELETE ON products
FOR EACH ROW 
EXECUTE FUNCTION audit_changes();

CREATE TRIGGER trg_validate_price
BEFORE UPDATE ON products
FOR EACH ROW 
WHEN (NEW.price IS DISTINCT FROM OLD.price)
EXECUTE FUNCTION validate_price_change();

CREATE TRIGGER trg_update_category_count
AFTER INSERT OR DELETE ON products
FOR EACH ROW 
EXECUTE FUNCTION update_product_count();

CREATE TRIGGER trg_notify_price_change
AFTER UPDATE ON products
FOR EACH ROW 
WHEN (NEW.price IS DISTINCT FROM OLD.price)
EXECUTE FUNCTION notify_price_change();

SELECT * FROM products;
SELECT * FROM categories;
SELECT * FROM audit_log;
SELECT * FROM price_change_notifications;

INSERT INTO categories (name) VALUES ('Electronics');
INSERT INTO products (name, price, category_id) VALUES ('Laptop', 1000, 1);
UPDATE products SET price = 2800 WHERE product_id = 1;
INSERT INTO products (name, price, category_id) VALUES ('Mouse', 300, 1);