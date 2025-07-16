import { Repository } from 'typeorm';
import { Task } from './task.entity';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    create(task: Partial<Task>): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task | null>;
    update(id: number, updateData: Partial<Task>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
