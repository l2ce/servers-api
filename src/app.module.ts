import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServersModule } from './servers/servers.module';
import { WorldsService } from './worlds/worlds.service';
import { WorldsController } from './worlds/worlds.controller';

@Module({
  imports: [
    ServersModule,
    MongooseModule.forRoot('mongodb+srv://l2ce:123@cluster0.08v8g.mongodb.net/l2ce?retryWrites=true&w=majority')
  ],
  controllers: [AppController, WorldsController],
  providers: [AppService, WorldsService],
})
export class AppModule {}
