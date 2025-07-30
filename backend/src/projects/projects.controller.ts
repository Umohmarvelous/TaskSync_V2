import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';

import { CreateProjectDto } from './dto/create-userproject.dto';
import { ProjectService } from './projects.service';
import { UpdateProjectDto } from './dto/update-userproject.dto';


@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto): Promise<CreateProjectDto[]> {
    // Now returns all users sorted by id ascending after creation
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
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProjectDto: UpdateProjectDto
  ): Promise<{ message: string; data?: UpdateProjectDto }> {
    try {
      const updated = await this.projectService.update(id, updateProjectDto);
      return { message: 'User updated successfully', data: updated };
    } catch (error) {
      if (error instanceof Error && error.message === 'users already exist') {
        return { message: 'users already exist' };
      }
      throw error;
    }
  }


  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<string> {
    // Returns success or not found message, and updates ids
    return await this.projectService.remove(id);
  }
}
