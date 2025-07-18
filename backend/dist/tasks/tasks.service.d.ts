import { Repository } from 'typeorm';
import { Task } from './task.entity';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    create(task: Partial<Task>): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    update(id: number, updateData: Partial<Task>): Promise<Task>;
    remove(id: number): Promise<void>;
}
