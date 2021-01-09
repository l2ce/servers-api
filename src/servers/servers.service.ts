import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { Server, ServerDocument } from './schemas/servers.schema';

@Injectable()
export class ServersService {

  constructor(
    @InjectModel(Server.name) 
    private serverModel:Model<ServerDocument>
  ) {}

  async getAll():Promise<Server[]> {
    return this.serverModel.find().exec()
  }

  async getById(id: string):Promise<Server> {
    return this.serverModel.findById(id)
  }

  async create(server: CreateServerDto):Promise<Server> {
    const newServer = new this.serverModel(server)
    return newServer.save()
  }

  async remove(id: string):Promise<Server> {
    return this.serverModel.findByIdAndRemove(id)
  }

  async update(id:string, server: UpdateServerDto):Promise<Server> {
    return this.serverModel.findByIdAndUpdate(id, server, { new: true })
  }
}
