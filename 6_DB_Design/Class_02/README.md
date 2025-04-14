# SQL Queries, Filtering, and Grouping Data

Welcome to the second module of SQL learning! In this section, you'll learn how to:
- Write SELECT queries to retrieve data
- Filter data using WHERE clause
- Use different comparison and logical operators
- Work with constraints to maintain data integrity
- Group data using GROUP BY
- Filter grouped data with HAVING

## Topics Covered

### 1. Basic Queries and Filtering
- SELECT statement basics
- WHERE clause
- Comparison operators (=, >, <, >=, <=, !=)
- Logical operators (AND, OR, NOT)
- BETWEEN operator
- IN operator
- LIKE operator for pattern matching
- IS NULL and IS NOT NULL

### 2. Constraints
- NOT NULL
- UNIQUE
- CHECK constraints
- DEFAULT values

### 3. Grouping Data
- GROUP BY clause
- Aggregate functions (COUNT, SUM, AVG, MAX, MIN)
- HAVING clause for filtering groups

## Files in This Section

1. `01_basic_queries.sql`: Examples of SELECT statements and basic filtering
2. `02_advanced_filtering.sql`: Complex WHERE conditions and operators
3. `03_constraints.sql`: Different types of constraints
4. `04_grouping.sql`: GROUP BY and aggregate functions
5. `05_having.sql`: Filtering grouped data

## Tips for Writing Queries

1. Always start simple and add complexity gradually
2. Use proper indentation for better readability
3. Test your queries with small datasets first
4. Use meaningful table and column names
5. Consider using aliases for better readability

## Common Mistakes to Avoid

1. Forgetting WHERE clause (affects all rows)
2. Confusing = and == (SQL uses single =)
3. Using GROUP BY without proper aggregation
4. Mixing WHERE and HAVING incorrectly
5. Not handling NULL values properly 