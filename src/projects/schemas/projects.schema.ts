import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'
import { ProjectDto } from "../dto/project.dto";

export type ProjectDocument = Project & Document<ProjectDto>

@Schema()
export class Project {

  @Prop({default: null})
  name: string|null

  @Prop({default: null})
  url: string|null
  
  @Prop({default: 0})
  rating: number

  @Prop({default: 0})
  dateStart: Date

  @Prop({default: 0})
  dateEnd: Date
}

export const ProjectSchema = SchemaFactory.createForClass(Project)
