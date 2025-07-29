"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./task.entity");
let TasksService = class TasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async create(task) {
        try {
            const newTask = this.tasksRepository.create(task);
            return await this.tasksRepository.save(newTask);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('Task with this information already exists');
            }
            throw new common_1.BadRequestException('Failed to create task. Please try again.');
        }
    }
    async findAll() {
        try {
            return await this.tasksRepository.find();
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to retrieve tasks. Please try again.');
        }
    }
    async findOne(id) {
        if (!id || isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid task ID provided');
        }
        try {
            const task = await this.tasksRepository.findOneBy({ id });
            if (!task) {
                throw new common_1.NotFoundException(`Task with ID ${id} not found`);
            }
            return task;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to retrieve task. Please try again.');
        }
    }
    async update(id, updateData) {
        if (!id || isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid task ID provided');
        }
        if (Object.keys(updateData).length === 0) {
            throw new common_1.BadRequestException('No update data provided');
        }
        try {
            const task = await this.tasksRepository.findOneBy({ id });
            if (!task) {
                throw new common_1.NotFoundException(`Task with ID ${id} not found`);
            }
            await this.tasksRepository.update(id, updateData);
            return await this.findOne(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('Task with this information already exists');
            }
            throw new common_1.BadRequestException('Failed to update task. Please try again.');
        }
    }
    async remove(id) {
        if (!id || isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid task ID provided');
        }
        try {
            const task = await this.tasksRepository.findOneBy({ id });
            if (!task) {
                throw new common_1.NotFoundException(`Task with ID ${id} not found`);
            }
            await this.tasksRepository.delete(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                throw new common_1.BadRequestException('Cannot delete task. Task has associated data.');
            }
            throw new common_1.BadRequestException('Failed to delete task. Please try again.');
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map