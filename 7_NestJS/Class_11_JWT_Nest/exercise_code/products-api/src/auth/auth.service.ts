import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from 'bcryptjs';
import { CredentialsDto } from './dtos/credentials.dto';
import { ref } from 'process';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async registerUser(userData: CreateUserDto) {
    const userExists = await this.usersService.findByEmail(userData.email);

    if (userExists) throw new BadRequestException('User already exists');

    // Hash the password
    const hashedPassword = await hash(userData.password, 8);

    // Update the password with the hashed password before saving
    userData.password = hashedPassword;

    await this.usersService.create(userData);
  }

  async loginUser(credentials: CredentialsDto) {
    const foundUser = await this.usersService.findByEmail(credentials.email);

    if (!foundUser) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await compare(
      credentials.password,
      foundUser.password,
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const token = await this.jwtService.signAsync({ userId: foundUser.id });
    const refreshToken = await this.jwtService.signAsync(
      { userId: foundUser.id },
      {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
        expiresIn: '7d',
      },
    );

    this.usersService.saveRefreshToken(foundUser.id, refreshToken);

    const { password, ...userWithoutPassword } = foundUser;

    return {
      user: userWithoutPassword,
      token,
      refreshToken,
    };
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      // Verify the refresh token
      const { userId } = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
      });

      // Find the user in the DB
      const foundUser = await this.usersService.findById(userId);

      // Check if token exists in the found user
      const tokenExists = foundUser.refreshTokens.some(
        (token) => token === refreshToken,
      );

      // If token doesnt exist then we do not refresh and throw error
      if (!tokenExists) throw new Error();

      // If it exists we generate new access token
      const accessToken = await this.jwtService.signAsync({
        userId: foundUser.id,
      });

      return { accessToken };
    } catch (error) {
      throw new ForbiddenException();
    }
  }
}
