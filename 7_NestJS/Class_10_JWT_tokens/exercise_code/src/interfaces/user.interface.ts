export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  refreshTokens: string[];
}

export interface UserCredentials {
  email: string;
  password: string;
}
