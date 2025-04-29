--Find all genres that have more than 3 movies with a rating of 'R'
SELECT 
	g.name,
	COUNT(*) AS r_rated_movie_count
FROM movie_genres mg 
JOIN genres g
ON mg.genre_id = g.genre_id	
JOIN movies m
ON mg.movie_id = m.movie_id
WHERE m.rating = 'R'
GROUP BY g.name 
HAVING COUNT(*) >3;

--Find directors who have made movies with total revenue over 500 million and have directed
--at least 2 movies
SELECT
	d.first_name,
	d.last_name,
	COUNT(m.movie_id) AS movie_count,
	SUM(r.domestic_revenue + r.international_revenue) as total_revenue
FROM directors d
JOIN movies m
ON d.director_id = m.director_id
JOIN movie_revenues r
ON m.movie_id = r.movie_id
GROUP BY d.director_id, d.first_name, d.last_name
HAVING COUNT(m.movie_id) >= 2 AND
SUM(r.domestic_revenue + r.international_revenue) > 500000000;

--Find actors who have appeared in more than 2 different genres and have won at least 1
--award

SELECT
	a.first_name,
	a.last_name,
	COUNT(mg.genre_id) AS genre_count,
	COUNT(aa.award_id) AS award_count
FROM actors a
JOIN cast_members cm 
ON a.actor_id = cm.actor_id
JOIN movie_genres mg 
ON cm.movie_id = mg.movie_id
JOIN actor_awards aa 
ON a.actor_id = aa.actor_id
GROUP BY a.first_name, a.last_name
HAVING COUNT(mg.genre_id) >= 2
AND COUNT(aa.award_id) >= 1;

--Find movies that have received more than 3 reviews with an average rating above 7
SELECT
	m.title,
	COUNT(r.review_id) AS review_count,
	AVG(r.rating) AS avarage_rating
FROM movies m
JOIN reviews r 
ON m.movie_id = r.movie_id
GROUP BY m.title
HAVING COUNT(r.review_id) >= 2 AND AVG(r.rating) > 7;

--Find production companies that have invested more than 100 million in movies released after
--2015
SELECT
	pc.name,
	m.title,
	SUM(mpc.investment_amount) as total_investment
FROM production_companies pc
JOIN movie_production_companies mpc
ON pc.company_id = mpc.company_id
JOIN movies m
ON mpc.movie_id = m.movie_id
WHERE m.release_date > '2015-01-01'
GROUP BY m.title, pc.name
HAVING SUM(mpc.investment_amount) > 1000000;

--Find countries where more than 2 movies were filmed with a total budget exceeding 150
--million
SELECT
	ml.country,
	COUNT(m.movie_id) AS movie_count,
	SUM(m.budget) as total_budget
FROM movie_locations ml
JOIN movies m
ON ml.movie_id = m.movie_id
GROUP BY ml.country
HAVING COUNT(m.movie_id) > 2 AND SUM(m.budget) > 150000000;

--Find genres where the average movie duration is over 120 minutes and at least one movie
--has won an Oscar
SELECT
	g.name,
	AVG(m.duration_minutes) as avarage_duration
FROM genres g
JOIN movie_genres mg 
ON g.genre_id = mg.genre_id
JOIN movies m 
ON mg.movie_id = m.movie_id
WHERE m.movie_id IN (
SELECT
	ma.movie_id
FROM movie_awards ma
JOIN awards a 
ON ma.award_id = a.award_id
WHERE a.award_type = 'Oscar'
)
GROUP BY g.genre_id, g.name
HAVING AVG(m.duration_minutes) > 120;

--Find years where more than 3 movies were released with an average budget over 50 million

SELECT
	m.title,
	EXTRACT (YEAR FROM m.release_date) as release_year,
	COUNT(*) as movie_count,
	AVG(m.budget) as average_budget
FROM movies m
GROUP BY m.title, release_year
HAVING COUNT(*) >= 1 AND AVG(m.budget) > 50000000
ORDER BY release_year;


--Find actors who have played lead roles in more than 2 movies with a total revenue exceeding
--200 million
SELECT
	a.first_name,
	a.last_name,
	COUNT(cm.movie_id) AS lead_role,
	SUM(mr.domestic_revenue + mr.international_revenue) as total_revenue
FROM actors a
JOIN cast_members cm 
ON a.actor_id = cm.actor_id
JOIN movie_revenues mr 
ON cm.movie_id = mr.movie_id
WHERE cm.is_lead_role = TRUE
GROUP BY a.first_name, a.last_name
HAVING COUNT(cm.movie_id) > 2 AND 
SUM(mr.domestic_revenue + mr.international_revenue) > 200000000;

