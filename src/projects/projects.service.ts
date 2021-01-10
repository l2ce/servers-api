import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDto } from './dto/project.dto';
import { IProject } from './interface/project.interface';
import { Project } from './schemas/projects.schema';

@Injectable()
export class ProjectsService {

  constructor(
    @InjectModel(Project.name) 
    private projectModel:Model<IProject>
  ) {}

  async getAll() {
    return this.projectModel.find().exec()
  }

  async getById(id: string):Promise<IProject> {
    return this.projectModel.findById(id)
  }

  async create(server: ProjectDto):Promise<IProject> {
    const newProject = new this.projectModel(server)
    return newProject.save()
  }

  async remove(id: string):Promise<IProject> {
    return this.projectModel.findByIdAndRemove(id)
  }

  async update(id:string, project: ProjectDto):Promise<IProject> {
    return this.projectModel.findByIdAndUpdate(id, project, { new: true })
  }
}
