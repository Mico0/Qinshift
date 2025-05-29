import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UsersModule } from './users.module';
import { Model } from 'mongoose';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  findAll() {
    return this.userModel.find({});
  }

  async findById(id: string) {
    try {
      const foundUser = await this.userModel.findById(id);

      if (!foundUser) throw new Error();

      return foundUser;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async findByEmail(email: string) {
    const foundUser = await this.userModel.findOne({ email }).exec();

    return foundUser;
  }

  async findUserDetails(id: string) {}

  async create(createData: CreateUserDto) {
    const newUser = new this.userModel(createData);

    const createdUser = await newUser.save();

    return createdUser;
  }

  async updateUser(id: string, updateData: UpdateUserDto) {}

  async saveRefreshToken(id: string, refreshToken: string) {
    const user = await this.findById(id);

    user.refreshTokens.push(refreshToken);

    await user.save();
  }

  async deleteRefreshToken(id: string, refreshToken: string) {
    const user = await this.findById(id);

    user.refreshTokens = user.refreshTokens.filter(
      (token) => token !== refreshToken,
    );

    await user.save();
  }

  async deleteUser(id: string) {}
}
