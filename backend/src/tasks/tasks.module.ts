import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Userproject } from '../projects/project.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Task, Userproject])],
    providers: [TasksService],
    controllers: [TasksController],
})
export class TasksModule { } 