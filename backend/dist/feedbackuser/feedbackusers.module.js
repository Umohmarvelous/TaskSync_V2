"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackUsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const feedbackusers_controller_1 = require("./feedbackusers.controller");
const feedbackusers_service_1 = require("./feedbackusers.service");
const feedbackuser_entity_1 = require("./feedbackuser.entity");
let FeedbackUsersModule = class FeedbackUsersModule {
};
exports.FeedbackUsersModule = FeedbackUsersModule;
exports.FeedbackUsersModule = FeedbackUsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([feedbackuser_entity_1.Feedbackuser])],
        providers: [feedbackusers_service_1.FeedbackusersService],
        controllers: [feedbackusers_controller_1.FeedbackusersController],
    })
], FeedbackUsersModule);
//# sourceMappingURL=feedbackusers.module.js.map