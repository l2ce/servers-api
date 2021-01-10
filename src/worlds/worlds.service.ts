import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWorldDto } from './dto/create-world.dto';
import { UpdateWorldDto } from './dto/update-world.dto';
import { World, WorldDocument } from './schemas/worlds.schema';

@Injectable()
export class WorldsService {
  constructor(
    @InjectModel(World.name) 
    private worldModel:Model<WorldDocument>
  ) {}

  async getAll():Promise<World[]> {
    return this.worldModel.find().exec()
  }

  async getById(id: string):Promise<World> {
    return this.worldModel.findById(id)
  }

  async create(server: CreateWorldDto):Promise<World> {
    const newServer = new this.worldModel(server)
    return newServer.save()
  }

  async remove(id: string):Promise<World> {
    return this.worldModel.findByIdAndRemove(id)
  }

  async update(id:string, server: UpdateWorldDto):Promise<World> {
    return this.worldModel.findByIdAndUpdate(id, server, { new: true })
  }
}
