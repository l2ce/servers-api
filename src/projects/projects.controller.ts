import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectDto, ResponseProjectDto } from './dto/project.dto';
import { IProject } from './interface/project.interface';
import { Project } from './schemas/projects.schema';
import { ProjectsService } from './projects.service';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor( private readonly projectsService: ProjectsService) {}
  
  @Get()
  @ApiOperation({ summary: 'Получить список всех проектов' })
  @ApiResponse({ status: 200, isArray: true, type: ResponseProjectDto })
  getAll():Promise<IProject[]> {
    return this.projectsService.getAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить проект' })
  @ApiResponse({ status: 200, type: ResponseProjectDto })
  getOne(@Param('id') id:string):Promise<IProject> {
    return this.projectsService.getById(id)
  }

  @Post()
  @ApiOperation({ summary: 'Добавить новый проект' })
  @ApiResponse({ status: 200, type: ResponseProjectDto })
  create(@Body('data') server: ProjectDto):Promise<IProject> {
    return this.projectsService.create(server)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить проект' })
  @ApiResponse({ status: 200, type: ResponseProjectDto })
  remove(@Param('id') id: string):Promise<IProject> {
    return this.projectsService.remove(id)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Обновить проект' })
  @ApiResponse({ status: 200, type: ResponseProjectDto })
  update(@Body() project: ProjectDto, @Param('id') id:string):Promise<Project> {
    return this.projectsService.update(id, project)
  }
}
