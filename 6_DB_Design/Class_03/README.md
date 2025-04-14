# SQL Relations and Joining Data

Welcome to the third module of SQL learning! Here you'll learn about relationships between tables and different ways to combine data.

## Topics Covered

### 1. Combining Data Sets

- UNION and UNION ALL
  - UNION: Combines and removes duplicates
  - UNION ALL: Combines including duplicates
- INTERSECT
  - Returns only records that exist in both sets
- EXCEPT
  - Returns records from first set that don't exist in second set

### 2. Table Relationships

- One-to-One relationships
- One-to-Many relationships
- Many-to-Many relationships

### 3. JOIN Types

- INNER JOIN
  - Matches records from both tables based on join condition
  - Only returns matching records
- LEFT JOIN (LEFT OUTER JOIN)
  - Returns all records from left table and matching records from right table
  - Non-matching records filled with NULL
- RIGHT JOIN (RIGHT OUTER JOIN)
  - Returns all records from right table and matching records from left table
  - Non-matching records filled with NULL
- FULL JOIN (FULL OUTER JOIN)
  - Returns all records from both tables
  - Non-matching records filled with NULL

## Tips for Working with Joins

1. Always start with two tables and add more gradually
2. Make sure to specify the correct join conditions
3. Use table aliases for better readability
4. Be careful with OUTER JOINs and NULL values
5. Check row counts before and after joins

## Common Mistakes to Avoid

1. Forgetting join conditions (creates cartesian products)
2. Using wrong join type for the requirement
3. Not considering NULL values
4. Forgetting table aliases in complex queries
5. Not matching data types in UNIONs