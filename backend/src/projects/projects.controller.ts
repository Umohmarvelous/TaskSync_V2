import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';

import { CreateProjectDto } from './dto/create-userproject.dto';
import { ProjectService } from './projects.service';
import { UpdateProjectDto } from './dto/update-userproject.dto';


@Controller('projectusers')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto): Promise<CreateProjectDto> {
    return await this.projectService.create(createProjectDto);
  }

  @Get()
  async findAll(): Promise<CreateProjectDto[]> {
    return await this.projectService.findAll();
  }

  ///////////////
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<CreateProjectDto> {
    return await this.projectService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateProjectDto: UpdateProjectDto): Promise<UpdateProjectDto> {
    return await this.projectService.update(id, updateProjectDto);
  }

  //   @Patch(':id') // PATCH /users/:id
//   update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateFeedbackuserDto: UpdateFeedbackuserDto) {
//     return this.feedbackService.update(id, UpdateFeedbackuserDto)
//   }


  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<String> {
    return await this.projectService.remove(id);
  }
}
