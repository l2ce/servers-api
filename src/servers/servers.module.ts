import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServersController } from './servers.controller';
import { ServersService } from './servers.service';
import { Server, ServerSchema } from './schemas/servers.schema'
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Server.name, schema: ServerSchema }
    ])
  ],
  providers: [ServersService],
  controllers: [ServersController]
})
export class ServersModule {}
