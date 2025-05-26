import jwt from "jsonwebtoken";

//1. Create token
export const createAccessToken = (userId: string) => {
  //   console.log(process.env);

  const secret = process.env.ACCESS_TOKEN_SECRET as string;

  return jwt.sign({ userId }, secret, {
    expiresIn: "20s",
  });
};

//2. Verify access token
export const verifyAccessToken = (token: string) => {
  const secret = process.env.ACCESS_TOKEN_SECRET as string;

  //   console.log("JWT VERIFY", jwt.verify(token, secret) as { userId: string });

  return jwt.verify(token, secret) as { userId: string };
};

//3. Create a refresh token

export const createRefreshToken = (userId: string) => {
  const secret = process.env.REFRESH_TOKEN_SECRET as string;

  return jwt.sign({ userId }, secret, {
    expiresIn: "7d",
  });
};

//4. Verify refresh token
export const verifyRefreshToken = (token: string) => {
  const secret = process.env.REFRESH_TOKEN_SECRET as string;

  return jwt.verify(token, secret) as { userId: string };
};
