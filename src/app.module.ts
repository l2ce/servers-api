import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServersModule } from './servers/servers.module';
import { WorldsModule } from './worlds/worlds.module';

@Module({
  imports: [
    ServersModule,
    WorldsModule,
    MongooseModule.forRoot('mongodb+srv://l2ce:123@cluster0.08v8g.mongodb.net/l2ce?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
