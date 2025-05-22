import jwt from "jsonwebtoken";

//1. Create a new access token
export const createAccessToken = (userId: string) => {
  const secret = process.env.ACCESS_TOKEN_SECRET as string;

  return jwt.sign({ userId }, secret, {
    expiresIn: "5m",
  });
};

//2. Verify access token
export const verifyAccessToken = (token: string) => {
  const secret = process.env.ACCESS_TOKEN_SECRET as string;

  return jwt.verify(token, secret) as { userId: string };
};
