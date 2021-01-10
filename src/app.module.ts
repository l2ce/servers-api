import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServersModule } from './servers/servers.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ProjectsModule,
    ServersModule,
    MongooseModule.forRoot('mongodb+srv://l2ce:123@cluster0.08v8g.mongodb.net/l2ce?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
