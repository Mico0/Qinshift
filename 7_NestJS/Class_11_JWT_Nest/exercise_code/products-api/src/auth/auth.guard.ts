import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UsersService } from 'src/users/users.service';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();

      // console.log('Request', request);

      const token = this.extractToken(request);

      console.log(token);

      if (!token) return false;

      const { userId } = await this.jwtService.verifyAsync(token);

      console.log('this is the userid', userId);

      return true;
    } catch (error) {
      return false;
    }
  }

  private extractToken(request: Request) {
    const token = request.headers['authorization']?.split(' ')[1];
    return token;
  }
}
