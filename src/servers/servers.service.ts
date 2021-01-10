import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServerDto } from './dto/server.dto';
import { IServer } from './interface/server.interface';
import { Server } from './schemas/servers.schema';

@Injectable()
export class ServersService {

  constructor(
    @InjectModel(Server.name) 
    private serverModel:Model<IServer>
  ) {}

  async getAll() {
    return this.serverModel.find().exec()
  }

  async getById(id: string):Promise<IServer> {
    return this.serverModel.findById(id)
  }

  async create(server: ServerDto):Promise<IServer> {
    const newServer = new this.serverModel(server)
    return newServer.save()
  }

  async remove(id: string):Promise<IServer> {
    return this.serverModel.findByIdAndRemove(id)
  }

  async update(id:string, server: ServerDto):Promise<IServer> {
    return this.serverModel.findByIdAndUpdate(id, server, { new: true })
  }
}
