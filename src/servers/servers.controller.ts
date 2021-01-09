import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { Server } from './schemas/servers.schema';
import { ServersService } from './servers.service';

@ApiTags('servers')
@Controller('servers')
export class ServersController {

  constructor( private readonly serversService: ServersService) {}
  
  @Get()
  getAll():Promise<Server[]> {
    return this.serversService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id:string):Promise<Server> {
    return this.serversService.getById(id)
  }

  @Post()
  create(@Body() createServerDto: CreateServerDto):Promise<Server> {
    return this.serversService.create(createServerDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<Server> {
    return this.serversService.remove(id)
  }

  @Put(':id')
  update(@Body() serverUpdateDto: UpdateServerDto, @Param('id') id:string):Promise<Server> {
    return this.serversService.update(id, serverUpdateDto)
  }
}
