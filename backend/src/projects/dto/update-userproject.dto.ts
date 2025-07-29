import { CreateProjectDto } from "./create-userproject.dto"
import { PartialType } from "@nestjs/mapped-types"

export class UpdateProjectDto extends PartialType(CreateProjectDto) { }

