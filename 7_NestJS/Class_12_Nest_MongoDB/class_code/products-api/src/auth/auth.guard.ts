import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      //Get request from context
      const request = context.switchToHttp().getRequest();
      const token = this.extractToken(request);
      if (!token) return false;
      const { userId } = await this.jwtService.verifyAsync(token);
      console.log('this is the userid', userId);
      const user = await this.usersService.findById(userId);
      request.user = user;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  private extractToken(request: Request) {
    const token = request.headers['authorization']?.split(' ')[1];

    return token;
  }
}
