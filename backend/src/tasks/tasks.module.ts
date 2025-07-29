import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { UserProject } from '../feedbackuser copy/project.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Task, UserProject])],
    providers: [TasksService],
    controllers: [TasksController],
})
export class TasksModule { } 