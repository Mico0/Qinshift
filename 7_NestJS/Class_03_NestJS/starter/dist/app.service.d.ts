import { User } from './user.interface';
export declare class AppService {
    users: User[];
    getHello(): string;
    getFullName(): string;
    getUsers(): User[];
    createUser(userData: User): void;
}
