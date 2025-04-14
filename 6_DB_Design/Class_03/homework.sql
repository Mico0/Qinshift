SELECT * FROM directors;
SELECT * FROM movies;
SELECT * FROM movie_locations;

-- Find directors who have directed more than 2 movies

SELECT d.first_name,d.last_name, COUNT (*) AS movie_count
FROM directors d
JOIN movies m
ON d.director_id = m.director_id
GROUP BY d.director_id, d.first_name, d.last_name
HAVING COUNT (*) = 1;

-- Find countries whre more than 3 movies were filmed

SELECT ml.country, COUNT (*) AS movie_count
FROM movie_locations ml
GROUP BY ml.country
HAVING COUNT (*) > 3;

