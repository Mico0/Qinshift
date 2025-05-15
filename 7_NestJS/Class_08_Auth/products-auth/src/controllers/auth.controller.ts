import { RequestHandler } from "express";
import { User } from "../interfaces/user.interface";
import { AuthService } from "../services/auth.service";

export class AuthController {
  static registerUser: RequestHandler = async (req, res) => {
    try {
      const userData: User = req.body;

      const registeredUser = await AuthService.registerUser(userData);

      res.json(registeredUser).status(201);
    } catch (error) {
      res
        .send({
          msg: "couldn't register user",
          error: (error as Error).message,
        })
        .status(400);
    }
  };
}
