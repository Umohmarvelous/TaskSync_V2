import { Controller, Get, Post, Body, Param, Patch, Delete, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { UserProject } from '../feedbackuser copy/project.entity';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    async create(@Body(ValidationPipe) task: Partial<Task>) {
        return await this.tasksService.create(task);
    }

    @Get()
    async findAll() {
        return await this.tasksService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return await this.tasksService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<Task>) {
        return await this.tasksService.update(+id, updateData);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        return await this.tasksService.remove(+id);
    }
} 