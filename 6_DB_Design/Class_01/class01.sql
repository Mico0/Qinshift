-- Creating a table
CREATE TABLE IF NOT EXISTS users (
	id INTEGER,
	username VARCHAR(50),
	email VARCHAR(100)
);


CREATE TABLE IF NOT EXISTS products (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	price DECIMAL(10,2)
); 

-- Inserting data into a table 
INSERT INTO users (id, username, email)
VALUES
	(1, 'testuser', 'test@gmail.com'),
	(2, 'restuser', 'rest@gmail.com'),
	(3, 'thirduser', 'rest@gmail.com'),
	(4, 'forthuser', 'rest@gmail.com'),
	(5, 'fifthuser', 'rest@gmail.com'),
	(6, 'sixthuser', 'rest@gmail.com');
	


-- Reading data from a table
SELECT * FROM users;

-- Reading specific columuns from a table
SELECT email FROM users;

--Filtering rows besed on a where condition
SELECT * FROM users
WHERE email = 'test@gmail.com';


-- Updating rows using update (if no filter is provieded will update every single row in the table)
INSERT INTO users (id, username, email)
VALUES (3, 'thirduser', 'third@gmail.com');

UPDATE users
SET email = 'updated@gmail.com', username = 'updateduser'
WHERE id = 3;

--You can insert without specifying columns but you need to provide values for all columns
INSERT INTO users 
VALUES (4, 'deleteuser', 'delete@gmail.com');

--Insert into example with null field
INSERT INTO users (id, username)
VALUES (5, 'erroruser');

--Deleting rows using delete (same applies as update, use at your own risk)
DELETE 
FROM users
WHERE id = 5;

SELECT * FROM users;

-- Deleting a table
DROP TABLE users;

-- Adding a column to a table using the ALTER keyword
ALTER TABLE users
ADD COLUMN phone VARCHAR(15);

-- Removing a column using the ALTER keyword
ALTER TABLE users
DROP COLUMN phone;

-- Copy table with data
CREATE TABLE users_backup AS
SELECT * FROM users;

SELECT * FROM users_backup;


DROP TABLE products;

-- Inserting into a table with a serial id
INSERT INTO products (name, price)
VALUES 
	('Milka Bubbles', 199.99),
	('Bounty', 59.56),
	('Najljepshe Zhelje', 84);

SELECT * FROM products;

-- Renaming a column in a table
ALTER TABLE products
RENAME COLUMN name to product_name;

