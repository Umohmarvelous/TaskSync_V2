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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeedbackuserDto = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
class CreateFeedbackuserDto {
}
exports.CreateFeedbackuserDto = CreateFeedbackuserDto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CreateFeedbackuserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateFeedbackuserDto.prototype, "feedbackUserName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateFeedbackuserDto.prototype, "feedbackUserRole", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], CreateFeedbackuserDto.prototype, "feedbackUserDetails", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CreateFeedbackuserDto.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CreateFeedbackuserDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=create-feedbackuser.dto.js.map