import MovieService from "../services/movie.service.js";
import Director from "../schemas/directors.schema.js";

export default class MovieController {
  constructor() {
    this.movieService = new MovieService();
  }

  async getMovies(req, res) {
    try {
      const filter = {};

      if (req.query.genre) {
        filter.genre = req.query.genre;
      }

      const movies = await this.movieService.getAll(filter);
      res.send(movies);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async getMovieById(req, res) {
    try {
      const movie = await this.movieService.getById(req.params.id);
      res.send(movie);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async createMovie(req, res) {
    try {
      const { name, genre, director, year, description, rating } = req.body;
      const movieObj = {
        name,
        genre,
        director,
        year,
        description,
        rating,
      };
      const movie = this.movieService.create(movieObj);
      //! Update and create return the new / updated movie
      res.send(movie);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async updateMovie(req, res) {
    try {
      const movieBody = req.body;
      const moviID = req.params.id;
      // console.log(moviID);
      const movie = this.movieService.update(moviID, movieBody);
      res.status(200).send(movie);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async deleteMovie(req, res) {
    try {
      const movieId = req.params.id;
      await this.movieService.delete(movieId);
      res.status(200).send({ message: "Movie deleted successfully" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
