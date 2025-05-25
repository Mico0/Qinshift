import { RequestHandler } from "express";
import { AuthService } from "../services/auth.service";
import { User, UserCredentials } from "../interfaces/user.interface";
import { Err } from "joi";

export class AuthController {
  static getUsers: RequestHandler = async (req, res) => {
    try {
      const users = await AuthService.getUsers();

      console.log(users);

      res.send(users);
    } catch (error) {
      res.status(404).send("No users found");
    }
  };

  static registerUser: RequestHandler = async (req, res) => {
    try {
      const userData: User = req.body;

      const registeredUser = await AuthService.registerUser(userData);

      res.json(registeredUser).json(201);
    } catch (error) {
      res.status(400).send({
        msg: "Could not register user",
        error: (error as Error).message,
      });
    }
  };

  static loginUser: RequestHandler = async (req, res) => {
    try {
      const userCreds: UserCredentials = req.body;

      const loggedInUser = await AuthService.loginUser(userCreds);

      res.send({
        status: 200,
        msg: loggedInUser,
      });
    } catch (error) {
      res.status(401).send("Login credentials invalid");
    }
  };
}
