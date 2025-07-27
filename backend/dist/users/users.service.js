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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        try {
            const user = this.usersRepository.create(createUserDto);
            return await this.usersRepository.save(user);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('User with this information already exists');
            }
            throw new common_1.BadRequestException('Failed to create user. Please try again.');
        }
    }
    async findById(id) {
        if (!id || isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid user ID provided');
        }
        try {
            const user = await this.usersRepository.findOne({ where: { id } });
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${id} not found`);
            }
            return user;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to retrieve user. Please try again.');
        }
    }
    async findAll() {
        try {
            return await this.usersRepository.find();
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to retrieve users. Please try again.');
        }
    }
    async update(id, updateUserDto) {
        if (!id || isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid user ID provided');
        }
        if (Object.keys(updateUserDto).length === 0) {
            throw new common_1.BadRequestException('No update data provided');
        }
        try {
            const user = await this.usersRepository.findOne({ where: { id } });
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${id} not found`);
            }
            await this.usersRepository.update(id, updateUserDto);
            return await this.findById(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('User with this information already exists');
            }
            throw new common_1.BadRequestException('Failed to update user. Please try again.');
        }
    }
    async remove(id) {
        if (!id || isNaN(id) || id <= 0) {
            throw new common_1.BadRequestException('Invalid user ID provided');
        }
        try {
            const user = await this.usersRepository.findOne({ where: { id } });
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${id} not found`);
            }
            await this.usersRepository.delete(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                throw new common_1.BadRequestException('Cannot delete user. User has associated data.');
            }
            throw new common_1.BadRequestException('Failed to delete user. Please try again.');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map