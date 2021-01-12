import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import config from './config/configuration'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(config().prefix)
  
  const options = new DocumentBuilder()
    .setTitle('L2ce servers-api')
    .setDescription('')
    .setVersion(config().version)
    .build()

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(config().swagger.host, app, document);
  await app.listen(3000);
}
bootstrap();
