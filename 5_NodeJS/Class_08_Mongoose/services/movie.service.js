import Movie from "../schemas/movie.schema.js";
import "../schemas/directors.schema.js"; //! must import the director schema because the movie schema uses it

export default class MovieService {
  async getAll() {
    const data = Movie.find({}).populate("director");

    return data;
  }

  async getById(id) {
    const movie = Movie.findById(id);
    return movie;
  }

  async create(body) {
    return await Movie.create(body);
  }

  async update(id, body) {
    let movie = Movie.findById(id);
    const updateData = { ...movie, ...body };
    movie.set(updateData);
    await movie.save();
    return movie;
  }

  async deleteById(id) {
    return Movie.findByIdAndDelete(id);
  }
}
