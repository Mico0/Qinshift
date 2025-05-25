import { RequestHandler } from "express";
import { User, UserCredentials } from "../interfaces/user.interface";
import { AuthService } from "../services/auth.service";
import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "../const/jwt.const";

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
      const refreshToken = createRefreshToken(user.id);

      //You need this header in order to expose the headers below to the frontend
      res.set("access-control-expose-headers", "access-token, refresh-token");
      //This sets a new response header and sends it with the response
      res.set("access-token", accessToken);
      res.set("refresh-token", refreshToken);

      //Save refresh token in db
      await AuthService.saveRefreshToken(user.id, refreshToken);

      res.json(user);

      //Returning token in res body
      // res.json({ user, token: accessToken });
    } catch (error) {
      res
        .status(401)
        .json({ msg: "couldn't login user", error: (error as Error).message });
    }
  };

  static refreshAccessToken: RequestHandler = async (req, res) => {
    try {
      const refreshToken = req.headers["refresh-token"] as string;

      if (!refreshToken) throw new Error();

      //Try to verify refresh token
      const { userId } = verifyRefreshToken(refreshToken);

      //Find user in db
      const foundUser = await AuthService.getUserById(userId);

      //Check if refresn token exists in db
      const refreshTokenExists = foundUser.refreshTokens.some(
        token => token === refreshToken
      );

      if (!refreshTokenExists) throw new Error();

      const accessToken = createAccessToken(foundUser.id);

      //You need this header in order to expose the headers below to the frontend
      res.set("access-control-expose-headers", "access-token");

      res.set("access-token", accessToken);

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.sendStatus(403);
    }
  };

  static logoutUser: RequestHandler = async (req, res) => {
    try {
      const refreshToken = req.headers["refresh-token"] as string;

      const { userId } = verifyRefreshToken(refreshToken);

      await AuthService.deleteRefreshToken(userId, refreshToken);

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: (error as Error).message });
    }

    res.sendStatus(200);
  };
}
