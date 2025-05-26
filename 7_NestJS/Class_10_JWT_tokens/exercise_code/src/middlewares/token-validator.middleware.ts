import { RequestHandler } from "express";
import { verifyAccessToken } from "../const/jwt.const";
import { AuthService } from "../services/auth.service";

export const tokenValidator: RequestHandler = async (req, res, next) => {
  try {
    // Checking if authorization header exists
    const authorizationHeader = req.headers["authorization"];
    // console.log(authorizationHeader);

    if (!authorizationHeader) throw new Error();

    console.log(authorizationHeader);

    // If there is an authorization header we extract the token from it
    const token = authorizationHeader.split(" ")[1];

    // We verify if its a valid token
    const { userId } = verifyAccessToken(token);

    // If verified we check if user exists in DB, we dont want to give access only by access token validation we must check if there is a user connected with that access token
    await AuthService.getUserById(userId);

    // console.log(await AuthService.getUserById(userId));

    // If token is verified and user exists we call next for the next route
    next();
  } catch (error) {
    res.sendStatus(403);
  }
};
