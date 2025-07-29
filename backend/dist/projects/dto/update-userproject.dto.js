"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectDto = void 0;
const create_userproject_dto_1 = require("./create-userproject.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateProjectDto extends (0, mapped_types_1.PartialType)(create_userproject_dto_1.CreateProjectDto) {
}
exports.UpdateProjectDto = UpdateProjectDto;
//# sourceMappingURL=update-userproject.dto.js.map