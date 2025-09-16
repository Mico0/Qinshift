export interface RegisterReq {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  token: string;
  refreshToken: string;
}
