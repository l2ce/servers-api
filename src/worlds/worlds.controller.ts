import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateWorldDto } from './dto/create-world.dto';
import { UpdateWorldDto } from './dto/update-world.dto';
import { World } from './schemas/worlds.schema';
import { WorldsService } from './worlds.service';

@ApiTags('worlds')
@Controller('worlds')
export class WorldsController {

  constructor( private readonly worldsService: WorldsService) {}
  
  @Get()
  getAll():Promise<World[]> {
    return this.worldsService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id:string):Promise<World> {
    return this.worldsService.getById(id)
  }

  @Post()
  create(@Body() createWorldDto: CreateWorldDto):Promise<World> {
    return this.worldsService.create(createWorldDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<World> {
    return this.worldsService.remove(id)
  }

  @Put(':id')
  update(@Body() updateWorldDto: UpdateWorldDto, @Param('id') id:string):Promise<World> {
    return this.worldsService.update(id, updateWorldDto)
  }
}

