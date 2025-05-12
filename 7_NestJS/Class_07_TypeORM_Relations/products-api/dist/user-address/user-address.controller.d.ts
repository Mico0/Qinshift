import { UserAddressService } from './user-address.service';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';
export declare class UserAddressController {
    private readonly userAddressService;
    constructor(userAddressService: UserAddressService);
    create(createUserAddressDto: CreateUserAddressDto): Promise<import("./entities/user-address.entity").UserAddress>;
    findAll(): Promise<import("./entities/user-address.entity").UserAddress[]>;
    findOne(id: string): string;
    update(id: string, updateUserAddressDto: UpdateUserAddressDto): string;
    remove(id: string): string;
}
