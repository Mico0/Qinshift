-- Movie Database Schema with All Types of Relations
-- This script includes table creation and data population

-- Drop tables if they exist (in correct order to handle foreign key constraints)
DROP TABLE IF EXISTS user_watchlist;
DROP TABLE IF EXISTS movie_revenues;
DROP TABLE IF EXISTS movie_locations;
DROP TABLE IF EXISTS movie_production_companies;
DROP TABLE IF EXISTS movie_awards;
DROP TABLE IF EXISTS actor_awards;
DROP TABLE IF EXISTS movie_genres;
DROP TABLE IF EXISTS cast_members;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS awards;
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS directors;
DROP TABLE IF EXISTS actors;
DROP TABLE IF EXISTS genres;
DROP TABLE IF EXISTS production_companies;
DROP TABLE IF EXISTS users;

-- Create ENUM types
CREATE TYPE mpaa_rating AS ENUM ('G', 'PG', 'PG-13', 'R', 'NC-17');
CREATE TYPE award_type AS ENUM ('Oscar', 'Golden Globe', 'BAFTA', 'Emmy', 'SAG');

-- Create tables
CREATE TABLE directors (
    director_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE,
    nationality VARCHAR(50),
    biography TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE,
    nationality VARCHAR(50),
    biography TEXT,
    height_cm INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE genres (
    genre_id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE production_companies (
    company_id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    founding_date DATE,
    headquarters VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_date DATE,
    duration_minutes INTEGER,
    rating mpaa_rating,
    director_id INTEGER REFERENCES directors(director_id),
    plot_summary TEXT,
    language VARCHAR(50),
    budget DECIMAL(15,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE movie_revenues (
    movie_id INTEGER PRIMARY KEY REFERENCES movies(movie_id),
    domestic_revenue DECIMAL(15,2),
    international_revenue DECIMAL(15,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE awards (
    award_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    year INTEGER NOT NULL,
    category VARCHAR(100) NOT NULL,
    award_type award_type NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE movie_awards (
    movie_id INTEGER REFERENCES movies(movie_id),
    award_id INTEGER REFERENCES awards(award_id),
    PRIMARY KEY (movie_id, award_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE actor_awards (
    actor_id INTEGER REFERENCES actors(actor_id),
    award_id INTEGER REFERENCES awards(award_id),
    PRIMARY KEY (actor_id, award_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cast_members (
    movie_id INTEGER REFERENCES movies(movie_id),
    actor_id INTEGER REFERENCES actors(actor_id),
    character_name VARCHAR(100) NOT NULL,
    is_lead_role BOOLEAN DEFAULT false,
    PRIMARY KEY (movie_id, actor_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE movie_genres (
    movie_id INTEGER REFERENCES movies(movie_id),
    genre_id INTEGER REFERENCES genres(genre_id),
    PRIMARY KEY (movie_id, genre_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE movie_production_companies (
    movie_id INTEGER REFERENCES movies(movie_id),
    company_id INTEGER REFERENCES production_companies(company_id),
    investment_amount DECIMAL(15,2),
    PRIMARY KEY (movie_id, company_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE movie_locations (
    location_id SERIAL PRIMARY KEY,
    movie_id INTEGER REFERENCES movies(movie_id),
    city VARCHAR(100),
    country VARCHAR(100),
    specific_location TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    movie_id INTEGER REFERENCES movies(movie_id),
    user_id INTEGER REFERENCES users(user_id),
    rating INTEGER CHECK (rating BETWEEN 1 AND 10),
    review_text TEXT,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_watchlist (
    user_id INTEGER REFERENCES users(user_id),
    movie_id INTEGER REFERENCES movies(movie_id),
    added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, movie_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data

-- Insert Directors
INSERT INTO directors (first_name, last_name, birth_date, nationality, biography) VALUES
('Christopher', 'Nolan', '1970-07-30', 'British-American', 'Known for complex narratives and innovative filmmaking'),
('Martin', 'Scorsese', '1942-11-17', 'American', 'Influential filmmaker known for crime dramas'),
('Quentin', 'Tarantino', '1963-03-27', 'American', 'Known for nonlinear storytelling and stylized violence'),
('Steven', 'Spielberg', '1946-12-18', 'American', 'Pioneer of modern Hollywood blockbuster films'),
('Kathryn', 'Bigelow', '1951-11-27', 'American', 'First woman to win Academy Award for Best Director'),
('David', 'Fincher', '1962-08-28', 'American', 'Known for dark, psychological thrillers and meticulous attention to detail'),
('Ridley', 'Scott', '1937-11-30', 'British', 'Pioneering visual stylist known for science fiction and historical epics'),
('Greta', 'Gerwig', '1983-08-04', 'American', 'Actor turned director known for intimate character studies'),
('Denis', 'Villeneuve', '1967-10-03', 'Canadian', 'Known for sophisticated science fiction and intense dramas'),
('Bong', 'Joon-ho', '1969-09-14', 'South Korean', 'Genre-mixing director known for social commentary');

-- Insert Actors
INSERT INTO actors (first_name, last_name, birth_date, nationality, biography, height_cm) VALUES
('Leonardo', 'DiCaprio', '1974-11-11', 'American', 'Academy Award-winning actor known for intense performances', 183),
('Meryl', 'Streep', '1949-06-22', 'American', 'Most nominated performer in Academy Award history', 168),
('Tom', 'Hanks', '1956-07-09', 'American', 'Versatile actor known for both dramatic and comedic roles', 183),
('Cate', 'Blanchett', '1969-05-14', 'Australian', 'Acclaimed actress known for versatile performances', 174),
('Denzel', 'Washington', '1954-12-28', 'American', 'Powerful dramatic actor with numerous accolades', 185),
('Brad', 'Pitt', '1963-12-18', 'American', 'Versatile actor known for both leading and character roles', 180),
('Viola', 'Davis', '1965-08-11', 'American', 'Powerful performer known for intense dramatic roles', 165),
('Christian', 'Bale', '1974-01-30', 'British', 'Method actor known for physical transformations', 183),
('Emma', 'Stone', '1988-11-06', 'American', 'Versatile actress skilled in both drama and comedy', 168),
('Song', 'Kang-ho', '1967-01-17', 'South Korean', 'Collaborative actor known for nuanced performances', 180);

-- Insert Genres
INSERT INTO genres (name, description) VALUES
('Action', 'Emphasis on exciting action sequences'),
('Drama', 'Character development and emotional themes'),
('Comedy', 'Intended to be humorous'),
('Science Fiction', 'Imaginative and futuristic concepts'),
('Horror', 'Intended to frighten and thrill'),
('Romance', 'Focus on romantic love stories'),
('Documentary', 'Non-fiction films about real events'),
('Animation', 'Films using animation techniques'),
('Thriller', 'Suspenseful and exciting stories'),
('Fantasy', 'Imaginative and magical elements');

-- Insert Production Companies
INSERT INTO production_companies (name, founding_date, headquarters) VALUES
('Universal Pictures', '1912-04-30', 'Universal City, California'),
('Warner Bros.', '1923-04-04', 'Burbank, California'),
('Paramount Pictures', '1912-05-08', 'Hollywood, California'),
('20th Century Studios', '1935-05-31', 'Los Angeles, California'),
('Sony Pictures', '1987-12-21', 'Culver City, California'),
('A24', '2012-08-20', 'New York City, New York'),
('Lionsgate', '1997-07-10', 'Santa Monica, California'),
('Focus Features', '2002-05-26', 'Universal City, California'),
('NEON', '2017-01-01', 'New York City, New York'),
('CJ Entertainment', '1995-03-15', 'Seoul, South Korea');

-- Insert Movies
INSERT INTO movies (title, release_date, duration_minutes, rating, director_id, plot_summary, language, budget) VALUES
('Inception', '2010-07-16', 148, 'PG-13', 1, 'A thief who enters the dreams of others to steal secrets from their subconscious.', 'English', 160000000),
('The Departed', '2006-10-06', 151, 'R', 2, 'An undercover cop and a mole in the police attempt to identify each other.', 'English', 90000000),
('Pulp Fiction', '1994-10-14', 154, 'R', 3, 'Various interconnected stories of criminals in Los Angeles.', 'English', 8000000),
('Jurassic Park', '1993-06-11', 127, 'PG-13', 4, 'A theme park showcasing genetically recreated dinosaurs turns deadly.', 'English', 63000000),
('Zero Dark Thirty', '2012-12-19', 157, 'R', 5, 'The decade-long hunt for al-Qaeda terrorist leader Osama bin Laden.', 'English', 40000000),
('Fight Club', '1999-10-15', 139, 'R', 6, 'An insomniac office worker and a mysterious soap maker form an underground fighting club that evolves into something much more.', 'English', 63000000),
('Alien', '1979-05-25', 117, 'R', 7, 'The crew of a commercial spacecraft encounter a deadly alien life form.', 'English', 11000000),
('Lady Bird', '2017-12-01', 94, 'R', 8, 'A nurse works tirelessly to keep her family afloat as her daughter pushes against the constraints of their life in Sacramento.', 'English', 10000000),
('Arrival', '2016-11-11', 116, 'PG-13', 9, 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.', 'English', 47000000),
('Parasite', '2019-05-30', 132, 'R', 10, 'A poor family schemes to become employed by a wealthy family, leading to an unexpected incident.', 'Korean', 11400000);

-- Insert Movie Revenues
INSERT INTO movie_revenues (movie_id, domestic_revenue, international_revenue) VALUES
(1, 292576195, 836836967),
(2, 132384315, 289847354),
(3, 107928762, 213928762),
(4, 402453882, 914691118),
(5, 95720716, 132820716),
(6, 37030102, 101200000),
(7, 78900000, 122700000),
(8, 48958273, 30917760),
(9, 100546139, 203876595),
(10, 53367844, 258773645);

-- Insert Awards
INSERT INTO awards (name, year, category, award_type) VALUES
('Best Picture', 2011, 'Best Motion Picture', 'Oscar'),
('Best Director', 2007, 'Achievement in Directing', 'Oscar'),
('Best Original Screenplay', 1995, 'Writing', 'Oscar'),
('Best Visual Effects', 1994, 'Achievement in Visual Effects', 'Oscar'),
('Best Actress', 2013, 'Performance by an Actress in a Leading Role', 'Oscar'),
('Best Foreign Language Film', 2020, 'Best Picture', 'Oscar'),
('Best Adapted Screenplay', 2017, 'Writing', 'Oscar'),
('Best Production Design', 1980, 'Art Direction', 'Oscar'),
('Best Director', 2018, 'Achievement in Directing', 'Golden Globe'),
('Best Actor', 2000, 'Performance by an Actor', 'SAG');

-- Insert Movie Awards
INSERT INTO movie_awards (movie_id, award_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 8),
(7, 7),
(8, 9),
(9, 7),
(10, 6);

-- Insert Cast Members
INSERT INTO cast_members (movie_id, actor_id, character_name, is_lead_role) VALUES
(1, 1, 'Cobb', true),
(2, 1, 'Billy Costigan', true),
(3, 2, 'Mia Wallace', true),
(4, 3, 'Dr. Alan Grant', true),
(5, 4, 'Maya', true),
(6, 6, 'Tyler Durden', true),
(7, 4, 'Ripley', true),
(8, 9, 'Lady Bird', true),
(9, 2, 'Louise Banks', true),
(10, 10, 'Ki Taek', true),
(6, 1, 'Narrator', true),
(7, 7, 'Parker', false),
(8, 8, 'Marion McPherson', true),
(9, 3, 'Colonel Weber', false),
(10, 5, 'Da Song', false);

-- Insert Movie Genres
INSERT INTO movie_genres (movie_id, genre_id) VALUES
(1, 1), -- Inception - Action
(1, 4), -- Inception - Sci-Fi
(2, 2), -- The Departed - Drama
(2, 9), -- The Departed - Thriller
(3, 2), -- Pulp Fiction - Drama
(3, 9), -- Pulp Fiction - Thriller
(4, 1), -- Jurassic Park - Action
(4, 4), -- Jurassic Park - Sci-Fi
(5, 2), -- Zero Dark Thirty - Drama
(5, 9), -- Zero Dark Thirty - Thriller
(6, 2), -- Fight Club - Drama
(6, 9), -- Fight Club - Thriller
(7, 4), -- Alien - Sci-Fi
(7, 5), -- Alien - Horror
(8, 2), -- Lady Bird - Drama
(8, 3), -- Lady Bird - Comedy
(9, 2), -- Arrival - Drama
(9, 4), -- Arrival - Sci-Fi
(10, 2), -- Parasite - Drama
(10, 9); -- Parasite - Thriller

-- Insert Movie Production Companies
INSERT INTO movie_production_companies (movie_id, company_id, investment_amount) VALUES
(1, 2, 160000000), -- Warner Bros. - Inception
(2, 2, 90000000),  -- Warner Bros. - The Departed
(3, 3, 8000000),   -- Paramount - Pulp Fiction
(4, 1, 63000000),  -- Universal - Jurassic Park
(5, 5, 40000000),  -- Sony - Zero Dark Thirty
(6, 2, 63000000),  -- Fight Club - Warner Bros
(7, 4, 11000000),  -- Alien - 20th Century
(8, 6, 10000000),  -- Lady Bird - A24
(9, 8, 47000000),  -- Arrival - Focus Features
(10, 10, 11400000); -- Parasite - CJ Entertainment

-- Insert Movie Locations
INSERT INTO movie_locations (movie_id, city, country, specific_location) VALUES
(1, 'Tokyo', 'Japan', 'Shinjuku District'),
(2, 'Boston', 'USA', 'South Boston'),
(3, 'Los Angeles', 'USA', 'Jack Rabbit Slims Restaurant'),
(4, 'Kauai', 'USA', 'Na Pali Coast'),
(5, 'Amman', 'Jordan', 'Various locations'),
(6, 'Los Angeles', 'USA', 'Paper Street House'),
(7, 'Shepperton', 'UK', 'Shepperton Studios'),
(8, 'Sacramento', 'USA', 'Various locations in Sacramento'),
(9, 'Montreal', 'Canada', 'Various locations in Quebec'),
(10, 'Seoul', 'South Korea', 'Various locations in Seoul');

-- Insert Users
INSERT INTO users (username, email) VALUES
('moviebuff', 'moviebuff@email.com'),
('cinephile', 'cinephile@email.com'),
('filmcritic', 'critic@email.com'),
('movielover', 'movielover@email.com'),
('filmfan', 'filmfan@email.com'),
('filmscholar', 'scholar@email.com'),
('movieexpert', 'expert@email.com'),
('cinemaaddict', 'addict@email.com'),
('filmgeek', 'geek@email.com'),
('moviemaster', 'master@email.com');

-- Insert Reviews
INSERT INTO reviews (movie_id, user_id, rating, review_text) VALUES
(1, 1, 9, 'A mind-bending masterpiece that requires multiple viewings.'),
(2, 2, 10, 'Scorsese at his finest. Incredible performances by the entire cast.'),
(3, 3, 9, 'Revolutionary filmmaking that changed cinema forever.'),
(4, 4, 8, 'Groundbreaking special effects that still hold up today.'),
(5, 5, 8, 'Intense and gripping from start to finish.'),
(6, 6, 10, 'A masterpiece of psychological storytelling and social commentary.'),
(7, 7, 9, 'A perfect blend of science fiction and horror that still terrifies.'),
(8, 8, 9, 'A beautiful coming-of-age story with authentic performances.'),
(9, 9, 9, 'A thought-provoking take on language, time, and human connection.'),
(10, 10, 10, 'A brilliant satire that perfectly captures class disparity.'),
(6, 7, 8, 'Controversial but undeniably powerful filmmaking.'),
(7, 8, 10, 'Set the standard for sci-fi horror.'),
(8, 9, 8, 'Captures the mother-daughter relationship perfectly.'),
(9, 10, 9, 'Intelligent sci-fi that respects its audience.'),
(10, 6, 10, 'A masterful blend of genres with perfect execution.');

-- Insert User Watchlist
INSERT INTO user_watchlist (user_id, movie_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(6, 7),
(7, 8),
(8, 9),
(9, 10),
(10, 6);

-- Additional Actor Awards
INSERT INTO actor_awards (actor_id, award_id) VALUES
(6, 10),
(7, 8),
(8, 9),
(9, 7),
(10, 6); 