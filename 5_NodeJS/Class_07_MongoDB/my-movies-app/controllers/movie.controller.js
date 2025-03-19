import MovieService from "../services/movie.service.js";

export default class MovieController {
  constructor() {
    this.movieService = new MovieService();
  }

  async getAllMovies(req, res) {
    try {
      const movies = await this.movieService.getAll();
      res.json(movies);
    } catch (error) {
      res.status(500);
      res.json({ error: error.message });
    }
  }
  async getMovieById(req, res) {
    try {
      const movie = await this.movieService.getById(req.params.id);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      return res.json(movie);
    } catch (error) {
      res.status(500);
      res.json({ error: error.message });
    }
  }

  async createMovie(req, res) {
    try {
      const { name, description, genre, director, year } = req.body;
      const movieData = {
        name,
        description,
        genre,
        director,
        year,
        createdAt: new Date(),
      };
      const id = await this.movieService.create(movieData);
      res.status(201).json({ id, ...movieData });
    } catch (error) {
      res.status(500);
      res.json({ error: error.message });
    }
  }

  async updateMovie(req, res) {
    try {
      const { name, description, genre, director, year } = req.body;
      const movieData = {};

      if (name) {
        movieData.name = name;
      }

      if (description) {
        movieData.description = description;
      }

      if (genre) {
        movieData.genre = genre;
      }

      if (director) {
        movieData.director = director;
      }

      if (year) {
        movieData.year = year;
      }

      movieData.updatedAt = new Date();

      const success = await this.movieService.update(req.params.id, movieData);

      if (!success) {
        return res.status(404).json({ message: "Movie not found" });
      } else {
        res.json({ message: "Movie updated successfully" });
      }
    } catch (error) {
      res.status(500);
      res.json({ error: error.message });
    }
  }

  async deleteMovie(req, res) {
    try {
      const success = await this.movieService.delete(req.param.id);
      if (!success) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json({ message: "Movie deleted successfully" });
    } catch (error) {
      res.status(500);
      res.json({ error: error.message });
    }
  }
}
