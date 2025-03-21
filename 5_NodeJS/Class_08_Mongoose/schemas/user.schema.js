import { Schema, model } from "mongoose";
import { UserRoles } from "../util/constants.js";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    minLength: 5,
    maxLength: 30,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 5,
  },
  role: {
    type: [String],
    required: [true, "Role is required"],
    enum: UserRoles,
  },
});

const User = model("user", userSchema, "users");

export default User;
