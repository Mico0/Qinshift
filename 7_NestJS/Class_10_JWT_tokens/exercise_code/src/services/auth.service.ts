import { readFile, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { User, UserCredentials } from "../interfaces/user.interface";
import { json } from "node:stream/consumers";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import { markAsUntransferable } from "node:worker_threads";

const USERS_PATH = join(process.cwd(), "data", "users.json");

export class AuthService {
  static async getUsers() {
    const usersJSON = await readFileSync(USERS_PATH, "utf-8");

    const users: User[] = JSON.parse(usersJSON);

    return users;
  }

  static async getUserById(id: string) {
    const users = await this.getUsers();

    const foundUser = users.find((user) => user.id === id);

    if (!foundUser) throw new Error("user not found");

    return foundUser;
  }

  static async saveUsers(users: User[]) {
    return writeFileSync(USERS_PATH, JSON.stringify(users, null, 2), "utf-8");
  }

  static async registerUser(userData: User) {
    const users = await this.getUsers();

    const emailExists = users.some((user) => user.email === userData.email);

    if (emailExists) throw new Error("E-mail already exists");

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

    // console.log(newUser.password, userData.password);

    const { password, ...userWithoutPass } = newUser;

    // console.log(password);

    return userWithoutPass;
  }

  static async loginUser(creds: UserCredentials) {
    const users = await this.getUsers();

    const foundUser = users.find((user) => user.email === creds.email);

    if (!foundUser) throw new Error("This user does not exist");

    const comparePass = await bcrypt.compare(
      creds.password,
      foundUser.password
    );

    // console.log(comparePass);

    if (!comparePass) throw new Error("Password is invalid");

    const { password, ...userWithoutpass } = foundUser;

    return userWithoutpass;
  }

  static async saveRefreshToken(userId: string, refreshToken: string) {
    const users = await this.getUsers();

    const updateUsers = users.map((user) => {
      if (user.id === userId) {
        user.refreshTokens.push(refreshToken);

        return user;
      } else {
        return user;
      }
    });

    await this.saveUsers(updateUsers);
  }

  static async deleteRefreshToken(userId: string, refreshToken: string) {
    const users = await this.getUsers();

    const updateUsers = users.map((user) => {
      if (user.id === userId) {
        user.refreshTokens = user.refreshTokens.filter(
          (token) => token !== refreshToken
        );
        return user;
      } else {
        return user;
      }
    });

    await this.saveUsers(updateUsers);
  }
}
