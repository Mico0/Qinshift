import { RequestHandler } from "express";
import { verifyAccessToken } from "../const/jwt.const";

export const tokenValidator: RequestHandler = (req, res, next) => {
  try {
    //Checking if authorization header exists
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) throw new Error();

    //Extracting token from header
    console.log(authorizationHeader);
    const token = authorizationHeader.split(" ")[1];

    //Verifying token
    const { userId } = verifyAccessToken(token);

    console.log(userId);

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
};
