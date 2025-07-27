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
exports.FeedbackusersController = void 0;
const common_1 = require("@nestjs/common");
const feedbackusers_service_1 = require("./feedbackusers.service");
const create_feedbackuser_dto_1 = require("./dto/create-feedbackuser.dto");
let FeedbackusersController = class FeedbackusersController {
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
    }
    async create(createFeedbackDto) {
        return await this.feedbackService.create(createFeedbackDto);
    }
    async findAll() {
        return await this.feedbackService.findAll();
    }
    async findOne(id) {
        return await this.feedbackService.findOne(id);
    }
    async update(id, createFeedbackDto) {
        return await this.feedbackService.update(id, createFeedbackDto);
    }
    async remove(id) {
        return await this.feedbackService.remove(id);
    }
};
exports.FeedbackusersController = FeedbackusersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_feedbackuser_dto_1.CreateFeedbackuserDto]),
    __metadata("design:returntype", Promise)
], FeedbackusersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FeedbackusersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FeedbackusersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_feedbackuser_dto_1.CreateFeedbackuserDto]),
    __metadata("design:returntype", Promise)
], FeedbackusersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FeedbackusersController.prototype, "remove", null);
exports.FeedbackusersController = FeedbackusersController = __decorate([
    (0, common_1.Controller)('feedbackuser'),
    __metadata("design:paramtypes", [feedbackusers_service_1.FeedbackusersService])
], FeedbackusersController);
//# sourceMappingURL=feedbackusers.controller.js.map