import { RequestHandler } from "express";
import { AuthService } from "../services/auth.service";
import { User, UserCredentials } from "../interfaces/user.interface";
import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "../const/jwt.const";
import { ref } from "joi";

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

      // console.log(loggedInUser.id);

      //After use is logged we can safely create an access token and a refresh token
      const accessToken = createAccessToken(loggedInUser.id);
      const refreshToken = createRefreshToken(loggedInUser.id);

      // console.log(accessToken);

      // After refresh token is created, save it in the DB
      await AuthService.saveRefreshToken(loggedInUser.id, refreshToken);

      // You need this header in order to expose the headers below to the frontend
      res.set("access-control-expose-headers", "access-token, refresh-token");

      res.set("access-token", accessToken);
      res.set("refresh-token", refreshToken);

      res.json(loggedInUser);
    } catch (error) {
      res.status(401).send("Login credentials invalid");
    }
  };

  static refreshAccessToken: RequestHandler = async (req, res) => {
    try {
      // Extract thee refresh token
      const refreshToken = req.headers["refresh-token"] as string;

      // Check if token exists in header if not throw error
      if (!refreshToken) throw new Error();

      //If token exists, try to verify it
      const { userId } = verifyRefreshToken(refreshToken);

      //If its verified then check if the user with that token exists in DB
      const foundUser = await AuthService.getUserById(userId);

      //Check if refresh token exists in DB for that user
      const refreshTokenExists = foundUser.refreshTokens.some(
        (token) => token === refreshToken
      );

      // If the refresh token doesnt exist for that user, throw error
      if (!refreshTokenExists) throw new Error();

      // iF it exists, create new access token for that user
      const accessToken = createAccessToken(userId);

      // Set headers appropriately
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

      if (!refreshToken) throw new Error();

      //Verify the token
      const { userId } = verifyRefreshToken(refreshToken);

      console.log(userId);

      await AuthService.deleteRefreshToken(userId, refreshToken);

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: (error as Error).message });
    }

    res.sendStatus(200);
  };
}
