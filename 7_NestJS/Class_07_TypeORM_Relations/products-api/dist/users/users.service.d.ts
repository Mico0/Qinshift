import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserAddressService } from 'src/user-address/user-address.service';
export declare class UsersService {
    private usersRepo;
    private userAddressService;
    constructor(usersRepo: Repository<User>, userAddressService: UserAddressService);
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    findUserDetails(id: string): Promise<User>;
    create(createData: CreateUserDto): Promise<{
        email: string;
        firstName: string;
        lastName: string;
        age: number;
    } & User>;
    updateUser(id: string, updateData: UpdateUserDto): Promise<void>;
    deleteUser(id: string): Promise<void>;
}
