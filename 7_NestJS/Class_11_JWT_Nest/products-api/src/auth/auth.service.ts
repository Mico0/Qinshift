import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from 'bcryptjs';
import { CredentialsDto } from './dtos/credentials.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  //1. Register
  async registerUser(userData: CreateUserDto) {
    const userExists = await this.usersService.findByEmail(userData.email);

    if (userExists) throw new BadRequestException('User already exists');

    //Hash the password
    const hashedPassword = await hash(userData.password, 8);

    userData.password = hashedPassword;

    //Save the user to the database
    await this.usersService.create(userData);
  }
  //2. Login user
  async loginUser(credentials: CredentialsDto) {
    const foundUser = await this.usersService.findByEmail(credentials.email);

    if (!foundUser) throw new UnauthorizedException('invalid credentials');

    const isPasswordValid = await compare(
      credentials.password,
      foundUser.password,
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('invalid credentials');

    const token = await this.jwtService.signAsync({ userId: foundUser.id });

    const { password, ...userWithoutPass } = foundUser;

    return {
      user: userWithoutPass,
      token,
    };
  }
}
