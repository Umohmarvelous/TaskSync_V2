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
        // Validate required fields
        if (!task.title || !task.description || !task.priority || !task.statusCategory || !task.assignedTo) {
            throw new BadRequestException('All fields (title, description, priority, statusCategory, assignedTo) are required');
        }

        // Validate field lengths
        if (task.title.length > 255) {
            throw new BadRequestException('Title cannot exceed 255 characters');
        }

        if (task.description.length > 1000) {
            throw new BadRequestException('Description cannot exceed 1000 characters');
        }

        // Validate priority values
        const validPriorities = ['high', 'medium', 'low'];
        if (!validPriorities.includes(task.priority)) {
            throw new BadRequestException('Priority must be one of: high, medium, low');
        }

        // Validate status category values
        const validStatusCategories = ['todo', 'inprogress', 'done'];
        if (!validStatusCategories.includes(task.statusCategory)) {
            throw new BadRequestException('Status category must be one of: todo, inprogress, done');
        }

        // Validate assignedTo field
        if (task.assignedTo.length > 100) {
            throw new BadRequestException('Assigned to field cannot exceed 100 characters');
        }

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

        // Validate field lengths for updated fields
        if (updateData.title && updateData.title.length > 255) {
            throw new BadRequestException('Title cannot exceed 255 characters');
        }

        if (updateData.description && updateData.description.length > 1000) {
            throw new BadRequestException('Description cannot exceed 1000 characters');
        }

        // Validate priority values for updated fields
        if (updateData.priority) {
            const validPriorities = ['high', 'medium', 'low'];
            if (!validPriorities.includes(updateData.priority)) {
                throw new BadRequestException('Priority must be one of: high, medium, low');
            }
        }

        // Validate status category values for updated fields
        if (updateData.statusCategory) {
            const validStatusCategories = ['todo', 'inprogress', 'done'];
            if (!validStatusCategories.includes(updateData.statusCategory)) {
                throw new BadRequestException('Status category must be one of: todo, inprogress, done');
            }
        }

        // Validate assignedTo field for updated fields
        if (updateData.assignedTo && updateData.assignedTo.length > 100) {
            throw new BadRequestException('Assigned to field cannot exceed 100 characters');
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