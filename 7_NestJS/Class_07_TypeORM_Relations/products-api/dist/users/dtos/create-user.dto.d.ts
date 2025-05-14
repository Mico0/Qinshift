import { CreateUserAddressDto } from 'src/user-address/dto/create-user-address.dto';
export declare class CreateUserDto {
    email: string;
    firstName: string;
    lastName: string;
    age: number;
    userAdress: CreateUserAddressDto;
}
