import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: {
        firstName: string;
        lastName: string;
        company?: string;
        purpose?: string;
    }): Promise<User>;
    findById(id: number): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: number, updateUserDto: Partial<User>): Promise<User>;
    remove(id: number): Promise<void>;
}
