import MovieService from "../services/movie.service.js";
import Director from "../schemas/directors.schema.js";

export default class MovieController {
  constructor() {
    this.movieService = new MovieService();
  }

  async getMovies(req, res) {
    try {
      const movies = await this.movieService.getAll();
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
        director: await Director.findOne({
          lastName: director.split("")[1],
        }),
        year,
        description,
        rating,
      };
      res.send(this.movieService.create(movieObj));
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
