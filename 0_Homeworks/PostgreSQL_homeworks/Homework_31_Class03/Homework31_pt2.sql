--Create a view that shows top-rated movies. Include: movie title, average
--rating, review count, director name
CREATE VIEW numberOne
AS
SELECT
	m.title,
	d.first_name,
	d.last_name,
	AVG(r.rating) AS avarage_rating,
	COUNT(r.review_id) AS review_count
FROM movies m
JOIN reviews r 
ON m.movie_id = r.movie_id
JOIN directors d 
ON m.director_id = d.director_id
GROUP BY m.title, d.first_name, d.last_name
ORDER BY 
	avarage_rating DESC,
	review_count DESC;

SELECT * FROM numberOne;

--Create a view for movie financial performance. Include: movie title, budget,
--total revenue, profit, ROI

CREATE VIEW numberTwo
AS
SELECT
	m.title,
	m.budget,
	SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM movies m
JOIN movie_revenues mr
ON m.movie_id = mr.movie_id
GROUP BY m.title, m.budget;

SELECT * FROM numberTwo;

--Create a view for actor filmography. Include: actor name, movie count, genre
--list, total revenue

CREATE VIEW numberThree
AS
SELECT
	a.first_name,
	a.last_name,
	STRING_AGG(g.name, ', ') AS genre_list, 
	COUNT(m.movie_id) AS movie_count,
	SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM actors a
JOIN cast_members cm 
ON a.actor_id = cm.actor_id
JOIN movies m 
ON cm.movie_id = m.movie_id
LEFT JOIN movie_genres mg 
ON m.movie_id = mg.movie_id
LEFT JOIN genres g 
ON mg.genre_id = g.genre_id
LEFT JOIN movie_revenues mr 
ON m.movie_id = mr.movie_id
GROUP BY a.first_name, a.last_name

SELECT * FROM numberThree;

--Create a view for genre statistics. Include: genre name, movie count, average
--rating, total revenue
CREATE VIEW numberFour
AS
SELECT
	g.name,
	COUNT(mg.movie_id) AS movie_count,
	AVG(r.rating) AS avarage_rating,
	SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM genres g
JOIN movie_genres mg 
ON g.genre_id = mg.genre_id
JOIN movies m 
ON mg.movie_id = m.movie_id
LEFT JOIN reviews r 
ON m.movie_id = r.movie_id
LEFT JOIN movie_revenues mr 
ON m.movie_id = mr.movie_id
GROUP BY g.name;

SELECT * FROM numberFour;

--Create a view for production company performance. Include: company name,
--movie count, total investment, total revenue
CREATE VIEW numberFive
AS
SELECT
	pc.name,
	COUNT(mpc.movie_id) AS movie_count,
	SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue,
	SUM(mpc.investment_amount) AS total_investment
FROM production_companies pc
JOIN movie_production_companies mpc
ON pc.company_id = mpc.company_id
LEFT JOIN movie_revenues mr
ON mpc.movie_id = mr.movie_id
GROUP BY pc.name;

SELECT * FROM numberFive;

