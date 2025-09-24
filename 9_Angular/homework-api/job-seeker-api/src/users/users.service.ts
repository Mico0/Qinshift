import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepo.save(createUserDto);
  }

  findAll() {
    return this.usersRepo.find({});
  }

  async findUserById(id: string) {
    try {
      const foundUser = await this.usersRepo.findOneByOrFail({ id });

      return foundUser;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async findUserByEmail(email: string) {
    return this.usersRepo.findOneBy({ email });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const foundUser = await this.findUserById(id);

    Object.assign(foundUser, updateUserDto);

    await this.usersRepo.save(foundUser);
  }

  async saveRefreshToken(userId: string, refreshToken: string) {
    const foundUser = await this.findUserById(userId);

    foundUser.refreshTokens.push(refreshToken);

    await this.usersRepo.save(foundUser);
  }

  async deleteRefreshToken(userId: string, refreshToken: string) {
    const foundUser = await this.findUserById(userId);

    foundUser.refreshTokens = foundUser.refreshTokens.filter(
      (token) => token !== refreshToken,
    );

    await this.usersRepo.save(foundUser);
  }

  async deleteUser(id: string) {
    const foundUser = await this.findUserById(id);

    await this.usersRepo.remove(foundUser);
  }
}
