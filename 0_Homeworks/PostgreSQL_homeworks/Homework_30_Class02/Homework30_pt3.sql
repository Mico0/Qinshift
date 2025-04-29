--Show movies and their directors
SELECT
	m.title,
	d.first_name,
	d.last_name
FROM movies m
JOIN directors d
ON m.director_id = d.director_id;

--Show actors and their movies
SELECT 
	a.first_name,
	a.last_name,
	m.title
FROM cast_members cm
JOIN actors a
ON cm.actor_id = a.actor_id
JOIN movies m 
ON cm.movie_id = m.movie_id
ORDER BY a.first_name,a.last_name, m.title;

--Show movies and their genres
SELECT
	m.title,
	g.name
FROM movies m
JOIN movie_genres mg
ON m.movie_id = mg.movie_id
JOIN genres g 
ON mg.genre_id = g.genre_id
ORDER BY m.title, g.name;

--Show users and their reviews

SELECT 
	u.username,
	m.title,
	r.review_text,
	r.rating
FROM reviews r
JOIN users u
ON r.user_id = u.user_id
JOIN movies m
ON r.movie_id = m.movie_id
ORDER BY u.username, r.review_text;

--Show movies and their locations

SELECT 
	m.title,
	ml.country
FROM movie_locations ml
JOIN movies m
ON ml.movie_id = m.movie_id
ORDER BY ml.country, m.title;

--Show movies and their production companies
SELECT 
	m.title,
	pc.name
FROM movies m
JOIN movie_production_companies mpc
ON m.movie_id = mpc.movie_id
JOIN production_companies pc
ON pc.company_id = mpc.company_id
ORDER BY pc.name,m.title;

--Show actors and their awards

SELECT 
	a.first_name,
	a.last_name,
	aw.name
FROM actors a
JOIN actor_awards aaw
ON a.actor_id = aaw.actor_id
JOIN awards aw
ON aw.award_id = aaw.award_id
ORDER BY aw.name, a.first_name, a.last_name;

--Show movies and their awards

SELECT 
	m.title,
	a.name,
	a.award_type,
	a.year
FROM movie_awards ma
JOIN movies m
ON ma.movie_id = m.movie_id
JOIN awards a
ON ma.award_id = a.award_id
ORDER BY a.year;

--Show users and their watchlist movies

SELECT
	u.username,
	m.title,
	m.release_date
FROM user_watchlist uw
JOIN users u
ON uw.user_id = u.user_id
JOIN movies m
ON uw.movie_id = m.movie_id
ORDER BY m.release_date;

--Show movies and their revenues

SELECT
	m.title,
	m.duration_minutes,
	mr.international_revenue
FROM movies m
JOIN movie_revenues mr
ON m.movie_id = mr.movie_id
ORDER BY m.duration_minutes;

