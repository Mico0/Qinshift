-- Find all actors with last name 'DiCaprio'
SELECT * FROM actors 
WHERE last_name = 'DiCaprio';

-- Find all directors whose first name starts with 'M'
SELECT * FROM directors 
WHERE first_name LIKE 'M%';

-- Find all actors from 'Australian' nationality
SELECT * FROM actors 
WHERE nationality = 'Australian';

-- Find all actors with birth date after '1980-01-01'
SELECT * FROM actors 
WHERE birth_date > '1980-01-01';

-- Exercise 6: Find all movies with 'R' rating
SELECT * FROM movies 
WHERE rating = 'R';

-- Find all movies where plot_summary contains the word "deadly"
SELECT * FROM movies 
WHERE plot_summary ILIKE '%deadly%';

-- Find all genres sorted by name A-Z
SELECT *
FROM genres
ORDER BY name ASC;

-- Find all movies whose title starts with “A” sorted by rating
SELECT *
FROM movies
WHERE title LIKE 'A%'
ORDER BY rating;

-- Find all movies whose title starts with "A" sorted by duration
SELECT *
FROM movies
WHERE title LIKE 'A%'
ORDER BY duration_minutes DESC;

-- Find all movies where language is English sorted by budget ascending
SELECT *
FROM movies
WHERE language = 'English'
ORDER BY budget ASC;

-- Find all movies released after January 1, 2010 ordered by release date in ascending order
SELECT *
FROM movies
WHERE release_date > '2010-01-01'
ORDER BY release_date ASC;
