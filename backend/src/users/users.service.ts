import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    // async createUser(dto: CreateUserDto) {
//   const hashedPassword = await bcrypt.hash(dto.password, 10);

    async create(createUserDto: User): Promise<User> {
        try {
            const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
            // Validate input data
            const user = this.usersRepository.create({ ...createUserDto, password: hashedPassword });
            return await this.usersRepository.save(user);
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new BadRequestException('User with this information already exists');
            }
            throw new BadRequestException('Failed to create user. Please try again.');
        }
    }

    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.usersRepository.findOne({ where: { email } });
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        }
        return null;
    }

    async findById(id: number): Promise<User> {
        // Validate ID parameter
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid user ID provided');
        }

        try {
            const user = await this.usersRepository.findOne({ where: { id } });
            if (!user) {
                throw new NotFoundException(`User with ID ${id} not found`);
            }
            return user;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException('Failed to retrieve user. Please try again.');
        }
    }

    async findAll(): Promise<User[]> {
        try {
            return await this.usersRepository.find();
        } catch (error) {
            throw new BadRequestException('Failed to retrieve users. Please try again.');
        }
    }

    async update(id: number, updateUserDto: Partial<User>): Promise<User> {
        // Validate ID parameter
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid user ID provided');
        }

        // Validate update data
        if (Object.keys(updateUserDto).length === 0) {
            throw new BadRequestException('No update data provided');
        }

        try {
            const user = await this.usersRepository.findOne({ where: { id } });
            if (!user) {
                throw new NotFoundException(`User with ID ${id} not found`);
            }

            await this.usersRepository.update(id, updateUserDto);
            return await this.findById(id);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_DUP_ENTRY') {
                throw new BadRequestException('User with this information already exists');
            }
            throw new BadRequestException('Failed to update user. Please try again.');
        }
    }

    async remove(id: number): Promise<void> {
        // Validate ID parameter
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid user ID provided');
        }


        try {
            const user = await this.usersRepository.findOne({ where: { id } });
            if (!user) {
                throw new NotFoundException(`User with ID ${id} not found`);
            }

            await this.usersRepository.delete(id);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                throw new BadRequestException('Cannot delete user. User has associated data.');
            }
            throw new BadRequestException('Failed to delete user. Please try again.');
        }
    }
} 