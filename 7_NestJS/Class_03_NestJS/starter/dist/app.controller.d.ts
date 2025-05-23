import { AppService } from './app.service';
import { User } from './user.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getFullName(): string;
    getUsers(): User[];
    createUser(body: User): void;
}
