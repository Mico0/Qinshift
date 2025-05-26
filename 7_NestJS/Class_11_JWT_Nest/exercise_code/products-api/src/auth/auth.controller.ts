import {
  Body,
  Controller,
  Headers,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { CredentialsDto } from './dtos/credentials.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() userData: CreateUserDto) {
    return this.authService.registerUser(userData);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async loginUser(@Body() credentials: CredentialsDto, @Res() res: Response) {
    const { user, token, refreshToken } =
      await this.authService.loginUser(credentials);

    res.set('access-token', token);
    res.set('refresh-token', refreshToken);

    res.json(user);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('refresh-token')
  async refreshAccessToken(
    @Headers('refresh-token') refreshToken: string,
    @Res() res: Response,
  ) {
    const { accessToken } =
      await this.authService.refreshAccessToken(refreshToken);

    res.set('access-token', accessToken);

    res.sendStatus(HttpStatus.NO_CONTENT);
  }
}
