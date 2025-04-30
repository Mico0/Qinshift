import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/full-name')
  getFullName(): string {
    return this.appService.getFullName();
  }

  @Get('/users')
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Post('/users')
  createUser(@Body() body: User) {
    return this.appService.createUser(body);
  }
}
