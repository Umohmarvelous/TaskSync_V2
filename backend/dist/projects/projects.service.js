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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("./project.entity");
let ProjectService = class ProjectService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async create(createProjectDto) {
        try {
            const user = this.projectRepository.create(createProjectDto);
            return await this.projectRepository.save(user);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('User with this information already exists');
            }
            throw new common_1.BadRequestException('Failed to create user. Please try again.');
        }
    }
    async findAll() {
        try {
            return await this.projectRepository.find();
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to retrieve feedbacks. Please try again.');
        }
    }
    async findOne(id) {
        if (!id || isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid feedback user ID provided');
        }
        try {
            const projectusers = await this.projectRepository.findOneBy({ id });
            if (!projectusers) {
                throw new common_1.NotFoundException(`Feedback user with ID ${id} not found`);
            }
            return projectusers;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to retrieve feedback user. Please try again.');
        }
    }
    async update(id, updateProjectDto) {
        if (!id || isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid feedback user ID provided');
        }
        if (Object.keys(updateProjectDto).length === 0) {
            throw new common_1.BadRequestException('No update data provided');
        }
        try {
            const projectusers = await this.projectRepository.findOneBy({ id });
            if (!projectusers) {
                throw new common_1.NotFoundException(`Feedback user with ID ${id} not found`);
            }
            Object.assign(projectusers, updateProjectDto);
            await this.projectRepository.update(id, updateProjectDto);
            return await this.findOne(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('Feedback user with this information already exists');
            }
            throw new common_1.BadRequestException('Failed to update feedback user. Please try again.');
        }
    }
    async remove(id) {
        if (!id || isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid feedback user ID provided');
        }
        try {
            const projectusers = await this.projectRepository.findOneBy({ id });
            if (!projectusers) {
                throw new common_1.NotFoundException(`Feedback user with ID ${id} not found`);
            }
            await this.projectRepository.delete(id);
            const removedUser = (`Feedback user with ID ${id} Deleted Successful!`);
            return removedUser;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                throw new common_1.BadRequestException('Cannot delete feedback user. Feedback user has associated data.');
            }
            throw new common_1.BadRequestException('Failed to delete feedback user. Please try again.');
        }
        finally {
            ('Deleted successful!');
        }
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.Userproject)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectService);
//# sourceMappingURL=projects.service.js.map