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
exports.FeedbackusersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const feedbackuser_entity_1 = require("./feedbackuser.entity");
let FeedbackusersService = class FeedbackusersService {
    constructor(feedbacksRepository) {
        this.feedbacksRepository = feedbacksRepository;
    }
    async create(createFeedbackDto) {
        try {
            const user = this.feedbacksRepository.create(createFeedbackDto);
            return await this.feedbacksRepository.save(user);
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
            return await this.feedbacksRepository.find();
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
            const feedbackuser = await this.feedbacksRepository.findOneBy({ id });
            if (!feedbackuser) {
                throw new common_1.NotFoundException(`Feedback user with ID ${id} not found`);
            }
            return feedbackuser;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to retrieve feedback user. Please try again.');
        }
    }
    async update(id, createFeedbackDto) {
        if (!id || isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid feedback user ID provided');
        }
        if (Object.keys(createFeedbackDto).length === 0) {
            throw new common_1.BadRequestException('No update data provided');
        }
        try {
            const feedbackuser = await this.feedbacksRepository.findOneBy({ id });
            if (!feedbackuser) {
                throw new common_1.NotFoundException(`Feedback user with ID ${id} not found`);
            }
            Object.assign(feedbackuser, createFeedbackDto);
            await this.feedbacksRepository.update(id, createFeedbackDto);
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
            const feedbackuser = await this.feedbacksRepository.findOneBy({ id });
            if (!feedbackuser) {
                throw new common_1.NotFoundException(`Feedback user with ID ${id} not found`);
            }
            await this.feedbacksRepository.delete(id);
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
exports.FeedbackusersService = FeedbackusersService;
exports.FeedbackusersService = FeedbackusersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(feedbackuser_entity_1.Feedbackuser)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FeedbackusersService);
//# sourceMappingURL=feedbackusers.service.js.map