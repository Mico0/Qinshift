import { RequestHandler } from "express";

export const sessionValidator: RequestHandler = (req, res, next) => {
  const user = req.session.user;

  console.log("this is the user from the session", user?.isLoggedIn);

  if (user?.isLoggedIn) next();
  else res.sendStatus(403);
};
