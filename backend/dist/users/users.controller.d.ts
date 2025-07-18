import { UsersService } from './users.service';
import { User } from './user.entity';
declare class CreateUserDto {
    firstName: string;
    lastName: string;
    company?: string;
    purpose?: string;
}
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: Partial<User>): Promise<User>;
    remove(id: string): Promise<void>;
}
export {};
