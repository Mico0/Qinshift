import { RequestHandler } from "express";
import { verifyAccessToken } from "../const/jwt.const";
import { AuthService } from "../services/auth.service";

export const tokenValidator: RequestHandler = async (req, res, next) => {
  try {
    //Checking if authorization header exists
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) throw new Error();

    //Extracting token from header
    console.log(authorizationHeader);
    const token = authorizationHeader.split(" ")[1];

    //Verifying token
    const { userId } = verifyAccessToken(token);

    //Checking if user exists in the database
    await AuthService.getUserById(userId);

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
};
