import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorldsController } from './worlds.controller';
import { WorldsService } from './worlds.service';
import { World, Worldschema } from './schemas/worlds.schema'
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: World.name, schema: Worldschema }
    ])
  ],
  providers: [WorldsService],
  controllers: [WorldsController]
})
export class WorldsModule {}
