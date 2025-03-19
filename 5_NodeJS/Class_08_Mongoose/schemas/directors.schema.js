import { Schema, model } from "mongoose";

const directorsSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minLength: 3,
    maxLength: 30,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    minLength: 3,
    maxLength: 30,
  },
  birthYear: {
    type: Number,
    required: [true, "Birth year is required"],
  },
});

const Director = model("director", directorsSchema, "directors");

export default { Director };
