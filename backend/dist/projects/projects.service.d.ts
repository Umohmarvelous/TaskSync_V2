import { Repository } from 'typeorm';
import { Userproject } from './project.entity';
import { CreateProjectDto } from './dto/create-userproject.dto';
import { UpdateProjectDto } from './dto/update-userproject.dto';
export declare class ProjectService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Userproject>);
    create(createProjectDto: CreateProjectDto): Promise<CreateProjectDto[]>;
    findAll(): Promise<CreateProjectDto[]>;
    findOne(id: number): Promise<CreateProjectDto>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<UpdateProjectDto>;
    remove(id: number): Promise<string>;
}
