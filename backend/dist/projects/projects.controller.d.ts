import { CreateProjectDto } from './dto/create-userproject.dto';
import { ProjectService } from './projects.service';
import { UpdateProjectDto } from './dto/update-userproject.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(createProjectDto: CreateProjectDto): Promise<CreateProjectDto[]>;
    findAll(): Promise<CreateProjectDto[]>;
    findOne(id: number): Promise<CreateProjectDto>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<{
        message: string;
        data?: UpdateProjectDto;
    }>;
    remove(id: number): Promise<string>;
}
