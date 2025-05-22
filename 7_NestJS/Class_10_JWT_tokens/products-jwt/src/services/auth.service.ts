import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { User, UserCredentials } from "../interfaces/user.interface";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

const USERS_PATH = join(process.cwd(), "data", "users.json");

export class AuthService {
  static async getUsers() {
    const usersJSON = await readFile(USERS_PATH, "utf-8");

    const users: User[] = JSON.parse(usersJSON);

    return users;
  }

  static async getUserById(id: string) {
    const users = await this.getUsers();

    const foundUser = users.find(user => user.id === id);

    if (!foundUser) throw new Error("user not found");

    return foundUser;
  }

  static async saveUsers(users: User[]) {
    await writeFile(USERS_PATH, JSON.stringify(users, null, 2), "utf-8");
  }

  static async registerUser(userData: User) {
    const users = await this.getUsers();

    const emailExists = users.some(user => user.email === userData.email);

    if (emailExists) throw new Error("email already exists");

    const hashedPassword = await bcrypt.hash(userData.password, 8);

    const newUser: User = {
      id: uuid(),
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: hashedPassword,
      refreshTokens: [],
    };

    users.push(newUser);

    await this.saveUsers(users);

    const { password, ...userWithoutPassword } = newUser;

    return userWithoutPassword;
  }

  static async loginUser(creds: UserCredentials) {
    const users = await this.getUsers();

    const foundUser = users.find(user => user.email === creds.email);

    if (!foundUser) throw new Error("invalid credentials");

    const isPasswordValid = await bcrypt.compare(
      creds.password,
      foundUser.password
    );

    if (!isPasswordValid) throw new Error("invalid credentials");

    const { password, refreshTokens, ...userWithoutPassword } = foundUser;

    return userWithoutPassword;
  }

  static async saveRefreshToken(userId: string, refreshToken: string) {
    const users = await this.getUsers();

    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        user.refreshTokens.push(refreshToken);

        return user;
      } else {
        return user;
      }
    });

    await this.saveUsers(updatedUsers);
  }

  static async deleteRefreshToken(userId: string, refreshToken: string) {
    const users = await this.getUsers();

    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        user.refreshTokens = user.refreshTokens.filter(
          token => token !== refreshToken
        );
        return user;
      } else {
        return user;
      }
    });

    await this.saveUsers(updatedUsers);
  }
}
