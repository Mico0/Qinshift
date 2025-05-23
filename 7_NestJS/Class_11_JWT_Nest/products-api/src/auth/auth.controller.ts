import {
  Body,
  Controller,
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
    const { user, token } = await this.authService.loginUser(credentials);

    res.set('access-token', token);

    res.json(user);
  }
}
