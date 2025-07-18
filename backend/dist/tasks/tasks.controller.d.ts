import { TasksService } from './tasks.service';
import { Task } from './task.entity';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(task: Partial<Task>): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    update(id: string, updateData: Partial<Task>): Promise<Task>;
    remove(id: string): Promise<void>;
}
