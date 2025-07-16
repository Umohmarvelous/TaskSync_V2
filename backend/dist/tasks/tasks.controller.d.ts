import { TasksService } from './tasks.service';
import { Task } from './task.entity';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(task: Partial<Task>): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task | null>;
    update(id: string, updateData: Partial<Task>): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
