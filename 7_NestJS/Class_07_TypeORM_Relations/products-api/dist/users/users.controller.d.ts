import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findById(id: string): Promise<import("./entities/user.entity").User>;
    findDetails(id: string): Promise<import("./entities/user.entity").User>;
    create(createData: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").User>;
    update(id: string, updateData: UpdateUserDto): Promise<void>;
    delete(id: string): Promise<void>;
}
