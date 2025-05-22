import { RequestHandler } from "express";
import { User, UserCredentials } from "../interfaces/user.interface";
import { AuthService } from "../services/auth.service";
import { createAccessToken } from "../const/jwt.const";

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

  static loginUser: RequestHandler = async (req, res) => {
    try {
      const creds: UserCredentials = req.body;

      const user = await AuthService.loginUser(creds);

      //We have valid login here
      const accessToken = createAccessToken(user.id);

      console.log(accessToken);
      //Returning token in res body
      // res.json({ user, token: accessToken });

      //This sets a new response header and sends it with the response
      res.set("access-token", accessToken);

      res.json(user);
    } catch (error) {
      res
        .status(401)
        .json({ msg: "couldn't login user", error: (error as Error).message });
    }
  };

  static logoutUser: RequestHandler = async (req, res) => {
    res.sendStatus(200);
  };
}
