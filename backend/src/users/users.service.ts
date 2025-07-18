import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async create(createUserDto: {
        firstName: string;
        lastName: string;
        company?: string;
        purpose?: string;
    }): Promise<User> {
        // Validate required fields
        if (!createUserDto.firstName || !createUserDto.lastName) {
            throw new BadRequestException('First name and last name are required');
        }

        // Validate field lengths
        if (createUserDto.firstName.length > 100) {
            throw new BadRequestException('First name cannot exceed 100 characters');
        }

        if (createUserDto.lastName.length > 100) {
            throw new BadRequestException('Last name cannot exceed 100 characters');
        }

        if (createUserDto.company && createUserDto.company.length > 100) {
            throw new BadRequestException('Company name cannot exceed 100 characters');
        }

        if (createUserDto.purpose && createUserDto.purpose.length > 100) {
            throw new BadRequestException('Purpose cannot exceed 100 characters');
        }

        try {
            const user = this.usersRepository.create(createUserDto);
            return await this.usersRepository.save(user);
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new BadRequestException('User with this information already exists');
            }
            throw new BadRequestException('Failed to create user. Please try again.');
        }
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

        // Validate field lengths for updated fields
        if (updateUserDto.firstName && updateUserDto.firstName.length > 100) {
            throw new BadRequestException('First name cannot exceed 100 characters');
        }

        if (updateUserDto.lastName && updateUserDto.lastName.length > 100) {
            throw new BadRequestException('Last name cannot exceed 100 characters');
        }

        if (updateUserDto.company && updateUserDto.company.length > 100) {
            throw new BadRequestException('Company name cannot exceed 100 characters');
        }

        if (updateUserDto.purpose && updateUserDto.purpose.length > 100) {
            throw new BadRequestException('Purpose cannot exceed 100 characters');
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