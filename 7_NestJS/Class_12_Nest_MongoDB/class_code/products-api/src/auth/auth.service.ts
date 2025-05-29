import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from 'bcryptjs';
import { CredentialsDto } from './dtos/credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
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
  // 2. Login user
  async loginUser(credentials: CredentialsDto) {
    const foundUser = await this.usersService.findByEmail(credentials.email);

    console.log(foundUser);

    if (!foundUser) throw new UnauthorizedException('invalid credentials');

    const isPasswordValid = await compare(
      credentials.password,
      foundUser.password,
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('invalid credentials');

    console.log(foundUser);

    const token = await this.jwtService.signAsync({ userId: foundUser._id });
    const refreshToken = await this.jwtService.signAsync(
      { userId: foundUser._id },
      {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
        expiresIn: '7d',
      },
    );

    await this.usersService.saveRefreshToken(foundUser.id, refreshToken);

    foundUser.password = '';

    return {
      user: foundUser,
      token,
      refreshToken,
    };
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      //1. Verify refresh token
      const { userId } = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
      });
      //2. Find user in db
      const foundUser = await this.usersService.findById(userId);
      //3. Check if token exits in users refreshTokens
      const tokenExists = foundUser.refreshTokens.some(
        (token) => token === refreshToken,
      );
      if (!tokenExists) throw new Error();
      const token = await this.jwtService.signAsync({ userId: foundUser.id });
      return { token };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException();
    }
  }

  async logoutUser(refreshToken: string) {
    try {
      const { userId } = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
      });
      await this.usersService.deleteRefreshToken(userId, refreshToken);
    } catch (error) {
      console.log(error);
      throw new BadRequestException("couldn't logout user");
    }
  }
}
