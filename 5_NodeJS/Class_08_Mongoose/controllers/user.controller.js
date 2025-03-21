import UserService from "../services/user.service.js";

export default class UserController {
  constructor() {
    this.userService = new UserService();
  }
  async registerUser(req, res) {
    try {
      const user = await this.userService.register(req.body);
      res.status(201).json({ message: `User registered successfully` });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async loginUser(req, res) {
    try {
      const user = await this.userService.login(req.body);
      res.status(200).json({ message: `User logged in successfully` });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
