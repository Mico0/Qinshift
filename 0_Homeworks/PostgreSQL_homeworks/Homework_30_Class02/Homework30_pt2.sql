SELECT * FROM movies
WHERE release_date > '2019-01-01';

SELECT * FROM actors
WHERE nationality = 'British';

SELECT * FROM movies
WHERE rating = 'PG-13';

SELECT * FROM directors
WHERE nationality = 'American';

SELECT * FROM movies
WHERE duration_minutes > 150;

SELECT * FROM actors
WHERE last_name = 'Pitt';

SELECT * FROM movies
WHERE budget > 100000000;

SELECT * FROM reviews
WHERE rating = 5;

SELECT * FROM movies
WHERE language = 'English';

SELECT * FROM production_companies
WHERE headquarters ILIKE '%California';

