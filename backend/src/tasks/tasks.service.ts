import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) { }

    async create(task: Partial<Task>): Promise<Task> {
        try {
            const newTask = this.tasksRepository.create(task);
            return await this.tasksRepository.save(newTask);
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new BadRequestException('Task with this information already exists');
            }
            throw new BadRequestException('Failed to create task. Please try again.');
        }
    }

    async findAll(): Promise<Task[]> {
        try {
            return await this.tasksRepository.find();
        } catch (error) {
            throw new BadRequestException('Failed to retrieve tasks. Please try again.');
        }
    }

    async findOne(id: number): Promise<Task> {
        // Validate ID parameter
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid task ID provided');
        }

        try {
            const task = await this.tasksRepository.findOneBy({ id });
            if (!task) {
                throw new NotFoundException(`Task with ID ${id} not found`);
            }
            return task;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException('Failed to retrieve task. Please try again.');
        }
    }

    async update(id: number, updateData: Partial<Task>): Promise<Task> {
        // Validate ID parameter
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid task ID provided');
        }

        // Validate update data
        if (Object.keys(updateData).length === 0) {
            throw new BadRequestException('No update data provided');
        }

        try {
            const task = await this.tasksRepository.findOneBy({ id });
            if (!task) {
                throw new NotFoundException(`Task with ID ${id} not found`);
            }

            await this.tasksRepository.update(id, updateData);
            return await this.findOne(id);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_DUP_ENTRY') {
                throw new BadRequestException('Task with this information already exists');
            }
            throw new BadRequestException('Failed to update task. Please try again.');
        }
    }

    async remove(id: number): Promise<void> {
        // Validate ID parameter
        if (!id || isNaN(id) || id <= 0) {
            throw new BadRequestException('Invalid task ID provided');
        }

        try {
            const task = await this.tasksRepository.findOneBy({ id });
            if (!task) {
                throw new NotFoundException(`Task with ID ${id} not found`);
            }

            await this.tasksRepository.delete(id);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                throw new BadRequestException('Cannot delete task. Task has associated data.');
            }
            throw new BadRequestException('Failed to delete task. Please try again.');
        }
    }
} 