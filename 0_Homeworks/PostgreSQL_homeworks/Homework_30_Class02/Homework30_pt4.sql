--Show all R-rated movies and their directors

SELECT
	m.title,
	m.rating,
	d.first_name,
	d.last_name
FROM movies m
JOIN directors d
ON m.director_id = d.director_id
WHERE m.rating = 'R';

--Show all movies from 2019 and their genres

SELECT 
	m.release_date,
	g.name
FROM movies m
JOIN movie_genres mg
ON m.movie_id = mg.movie_id
JOIN genres g
ON mg.genre_id = g.genre_id 
WHERE
	EXTRACT(YEAR FROM m.release_date) = 2019;

--Show all American actors and their movies

SELECT 
	a.first_name,
	a.last_name,
	m.title
FROM actors a
JOIN cast_members cm
ON a.actor_id = cm.actor_id
JOIN movies m
ON cm.movie_id = m.movie_id
WHERE a.nationality = 'American'
ORDER BY a.first_name, m.title;

--Show all movies with budget over 100M and their production companies

SELECT
	m.title,
	m.budget,
	pc.name
FROM movies m
JOIN movie_production_companies mpc 
ON m.movie_id = mpc.movie_id
JOIN production_companies pc
ON mpc.company_id = pc.company_id
WHERE m.budget > 100000000;

--Show all movies filmed in 'London' and their directors

SELECT 
	m.title,
	d.first_name,
	d.last_name,
	ml.city
FROM movies m
JOIN movie_locations ml
ON m.movie_id = ml.movie_id
JOIN directors d
ON m.director_id = d.director_id
WHERE ml.city = 'London';

--Show all horror movies and their actors

SELECT 
	m.title,
	a.first_name,
	a.last_name
FROM movies m
JOIN movie_genres mg
ON m.movie_id = mg.movie_id
JOIN genres g
ON mg.genre_id = g.genre_id
JOIN cast_members cm 
ON m.movie_id = cm.movie_id
JOIN actors a
ON cm.actor_id = a.actor_id
WHERE g.name = 'Horror';

--Show all movies with reviews rated 5 and their reviewers

SELECT
	m.title,
	u.username,
	r.rating
FROM movies m
JOIN reviews r
ON m.movie_id = r.movie_id
JOIN users u
ON r.user_id = u.user_id
WHERE r.rating > 7;

--Show all British directors and their movies

SELECT 
	m.title,
	d.first_name,
	d.last_name,
	d.nationality
FROM movies m
JOIN directors d
ON m.director_id = d.director_id
WHERE d.nationality = 'British';

--Show all movies longer than 180 minutes and their genres

SELECT
	g.name,
	m.duration_minutes
FROM movies m
JOIN movie_genres mg
ON m.movie_id = mg.movie_id
JOIN genres g
ON mg.genre_id = g.genre_id
WHERE m.duration_minutes > 150;

--Show all Oscar-winning movies and their directors

SELECT 
	m.title,
	d.first_name,
	d.last_name,
	a.name,
	a.award_type,
	a.year
FROM movies m 
JOIN movie_awards ma
ON m.movie_id = ma.movie_id
JOIN awards a
ON ma.award_id = a.award_id
JOIN directors d
ON m.director_id = d.director_id
WHERE a.award_type = 'Oscar'
ORDER BY a.year DESC;






