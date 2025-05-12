import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  findAll() {
    return this.usersRepo.find();
  }

  async findById(id: string) {
    try {
      const foundUser = await this.usersRepo.findOneByOrFail({ id });

      return foundUser;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async findUserDetails(id: string) {
    const foundUser = await this.usersRepo.findOne({
      where: { id },
      relations: {
        userAddress: true,
      },
    });
    if (!foundUser) throw new NotFoundException('User not found');

    return foundUser;
  }

  async create(createData: CreateUserDto) {
    try {
      const newUser = await this.usersRepo.save(createData);

      return newUser;
    } catch (error) {
      console.log('Save error', error);
    }
  }

  async update(id: string, updateData: UpdateUserDto) {
    try {
      const foundUser = await this.findById(id);

      Object.assign(foundUser, updateData);

      await this.usersRepo.save(foundUser);
    } catch (error) {
      console.log('Save error', error);
    }
  }

  async deleteUser(id: string) {
    const foundUser = await this.findById(id);

    await this.usersRepo.remove(foundUser);
  }
}
