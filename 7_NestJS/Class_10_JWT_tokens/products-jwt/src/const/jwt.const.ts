import jwt from "jsonwebtoken";

//1. Create a new access token
export const createAccessToken = (userId: string) => {
  const secret = process.env.ACCESS_TOKEN_SECRET as string;

  return jwt.sign({ userId }, secret, {
    expiresIn: "20m",
  });
};

//2. Verify access token
export const verifyAccessToken = (token: string) => {
  const secret = process.env.ACCESS_TOKEN_SECRET as string;

  return jwt.verify(token, secret) as { userId: string };
};

//3.Create refresh token
export const createRefreshToken = (userId: string) => {
  const secret = process.env.REFRESH_TOKEN_SECRET as string;

  return jwt.sign({ userId }, secret, {
    expiresIn: "7d",
  });
};

//4.Verify refresh token
export const verifyRefreshToken = (token: string) => {
  const secret = process.env.REFRESH_TOKEN_SECRET as string;

  return jwt.verify(token, secret) as { userId: string };
};
