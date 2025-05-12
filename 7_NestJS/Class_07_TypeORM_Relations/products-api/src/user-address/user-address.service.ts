import { Injectable } from '@nestjs/common';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAddress } from './entities/user-address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserAddressService {
  constructor(
    @InjectRepository(UserAddress) private userAddRepo: Repository<UserAddress>,
  ) {}
  async create(createUserAddressDto: CreateUserAddressDto) {
    const newAddress = this.userAddRepo.create({
      ...createUserAddressDto,
      user: { id: createUserAddressDto.user },
    });

    return this.userAddRepo.save(newAddress);
  }

  findAll() {
    return this.userAddRepo.find({
      relations: {
        user: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} userAddress`;
  }

  update(id: number, updateUserAddressDto: UpdateUserAddressDto) {
    return `This action updates a #${id} userAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAddress`;
  }
}
