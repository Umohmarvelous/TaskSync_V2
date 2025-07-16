import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) { }

    create(task: Partial<Task>) {
        const newTask = this.tasksRepository.create(task);
        return this.tasksRepository.save(newTask);
    }

    findAll() {
        return this.tasksRepository.find();
    }

    findOne(id: number) {
        return this.tasksRepository.findOneBy({ id });
    }

    update(id: number, updateData: Partial<Task>) {
        return this.tasksRepository.update(id, updateData);
    }

    remove(id: number) {
        return this.tasksRepository.delete(id);
    }
} 