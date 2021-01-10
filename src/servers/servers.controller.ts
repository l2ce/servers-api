import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServerDto, ResponseServerDto } from './dto/server.dto';
import { IServer } from './interface/server.interface';
import { Server } from './schemas/servers.schema';
import { ServersService } from './servers.service';

@ApiTags('servers')
@Controller('servers')

export class ServersController {

  constructor( private readonly serversService: ServersService) {}
  
  @Get()
  @ApiOperation({ summary: 'Получить список всех серверов' })
  @ApiResponse({ status: 200, isArray: true, type: ResponseServerDto })
  getAll():Promise<IServer[]> {
    return this.serversService.getAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить сервер' })
  @ApiResponse({ status: 200, type: ResponseServerDto })
  getOne(@Param('id') id:string):Promise<IServer> {
    return this.serversService.getById(id)
  }

  @Post()
  @ApiOperation({ summary: 'Добавить новый сервер' })
  @ApiResponse({ status: 200, type: ResponseServerDto })
  create(@Body('data') server: ServerDto):Promise<IServer> {
    return this.serversService.create(server)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить сервер' })
  @ApiResponse({ status: 200, type: ResponseServerDto })
  remove(@Param('id') id: string):Promise<IServer> {
    return this.serversService.remove(id)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Обновить сервер' })
  @ApiResponse({ status: 200, type: ResponseServerDto })
  update(@Body() server: ServerDto, @Param('id') id:string):Promise<Server> {
    return this.serversService.update(id, server)
  }
}
