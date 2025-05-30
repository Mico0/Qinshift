import { Reflector } from '@nestjs/core';
import { RoleType } from './roles.model';
import { SetMetadata } from '@nestjs/common';

// export const Roles = Reflector.createDecorator<RoleType>();
export const Roles = (...roles: RoleType[]) => SetMetadata('roles', roles);
