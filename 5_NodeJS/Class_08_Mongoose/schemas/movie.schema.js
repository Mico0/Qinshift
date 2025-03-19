import { Schema, model } from "mongoose";
import { genres } from "../util/constants.js";

const movieSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: 5,
    maxLength: 50,
  },
  genre: {
    type: [String],
    enum: genres,
    //! with enum we tell it which values it can accept, we limit it to the genres array only
    required: [true, "Genre is required"],
  },
  //   director: {
  //     type: String,
  //     required: [true, "Director is required"],
  //     minLength: 5,
  //     maxLength: 50,
  //   },
  director: {
    type: Schema.Types.ObjectId,
    ref: "director",
    //! ref: tells ObjectId in which schema and collection to look
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: 20,
    maxLength: 300,
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: 1,
    max: 10,
  },
});

const Movie = model("movie", movieSchema, "movies");

export default Movie;
