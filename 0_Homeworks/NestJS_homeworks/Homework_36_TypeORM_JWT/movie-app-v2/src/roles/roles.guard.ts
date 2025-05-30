import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RoleType } from './roles.model';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // console.log('in the role guard');
    // console.log('='.repeat(10));

    const request = context.switchToHttp().getRequest();

    // console.log(request);

    const roles = this.reflector.getAllAndOverride<RoleType[]>('roles', [
      context.getHandler(),
    ]);

    // console.log('classRole', classRole, ' handlerRole', handlerRole);

    // const decoratorRole = handlerRole || classRole;

    if (!roles) return true;

    console.log(roles);
    // console.log(request);
    console.log(request.user.role);

    const userRole = request.user.role as RoleType;

    // console.log('This is the decorator role', decoratorRole);
    // console.log('This is the user role', userRole);

    // if (userRole !== decoratorRole) return false;

    return roles.includes(userRole);
  }
}
