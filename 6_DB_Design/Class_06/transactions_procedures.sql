-- A transaction is a sequence of one or more SQL operations (such as INSERTs, UPDATEs, or DELETEs) that are executed as a single unit of work. 
-- Transactions guarantee that a set of database changes are either all committed to the database or none at all, ensuring that the database remains in a consistent state.
-- Once a transaction is committed, the results are permanently stored in the database, even in the event of a system crash

-- Transactions are typically started, committed, or rolled back using specific SQL statements:
-- BEGIN TRANSACTION / START TRANSACTION: Initiates the transaction.
-- COMMIT: Permanently saves all the operations performed during the transaction.
-- ROLLBACK: Reverses all operations performed during the transaction if an error occurs or if a condition is not met.

-- Tables
CREATE TABLE bank_accounts (
    account_id SERIAL PRIMARY KEY,
    balance DECIMAL(10,2) NOT NULL DEFAULT 0
);

CREATE TABLE transactions (
    transaction_id SERIAL PRIMARY KEY,
    from_account_id INTEGER,
    to_account_id INTEGER,
    amount DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample data
INSERT INTO bank_accounts (balance) VALUES (1000), (500);

SELECT * FROM bank_accounts;
SELECT * FROM transactions;


-- BASIC TRANSACTION: Transfer $100 from account 1 to 2
BEGIN;
UPDATE bank_accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE bank_accounts SET balance = balance + 100 WHERE account_id = 2;
INSERT INTO transactions (from_account_id, to_account_id, amount) VALUES (1,2,100);
COMMIT;

-- Procedure: Transfer with validation and rollback
CREATE OR REPLACE PROCEDURE transfer_money(sender INT, receiver INT, amt DECIMAL)
LANGUAGE plpgsql AS $$
BEGIN
	--Start transaction
	BEGIN
		IF amt <= 0 THEN
			RAISE EXCEPTION 'Amout must be a positive value';
		END IF;
		IF NOT EXISTS(
			SELECT 1 FROM bank_accounts WHERE account_id = sender AND balance >= amt
		) THEN 
			RAISE EXCEPTION 'Insufficient funds!';
		END IF;

		UPDATE bank_accounts SET balance = balance - amt WHERE account_id = sender;
		UPDATE bank_accounts SET balance = balance + amt WHERE account_id = receiver;
		INSERT INTO transactions (from_account_id, to_account_id, amount) VALUES (sender,receiver,amt);

		COMMIT; --ALL GOOD
	EXCEPTION
		WHEN OTHERS THEN
			ROLLBACK; -- Rollback if any failure
			RAISE;
		END;
	END;
	$$;

-- USAGE
CALL transfer_money(1, 2, )