import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';
import { UserAddress } from './entities/user-address.entity';
import { Repository } from 'typeorm';
export declare class UserAddressService {
    private userAddRepo;
    constructor(userAddRepo: Repository<UserAddress>);
    create(createUserAddressDto: CreateUserAddressDto): Promise<UserAddress>;
    findAll(): Promise<UserAddress[]>;
    findOne(id: number): string;
    update(id: number, updateUserAddressDto: UpdateUserAddressDto): string;
    remove(id: number): string;
}
