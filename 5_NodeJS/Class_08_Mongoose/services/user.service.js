import User from "../schemas/user.schema.js";
import bcrypt from "bcrypt";

export default class UserService {
  async register({ email, password, role }) {
    const existingUser = await User.findOne({ email });

    // check if user exists
    if (!existingUser) {
      throw new Error("This email already exists");
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //! bcrypt methods are asynchronous

    // create and return user
    return User.create({
      email,
      password: hashedPassword,
      role,
    });
  }

  async login({ email, password }) {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    //Compare the incoming password and the stored hash
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // Return user if valid credentials
    return user;
  }
}
