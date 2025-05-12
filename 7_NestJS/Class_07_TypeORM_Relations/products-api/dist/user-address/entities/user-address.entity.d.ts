import { User } from 'src/users/entities/user.entity';
export declare class UserAddress {
    id: number;
    country: string;
    city: string;
    street: string;
    zipCode: string;
    user: User;
}
