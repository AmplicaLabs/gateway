import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import metadata from '../metadata';

export const initSwagger = async (app: INestApplication, apiPath: string) => {
  const options = new DocumentBuilder()
    .setTitle('Content Publishing Service API')
    .setDescription('Content Publishing Service API')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      description: 'Enter JWT token',
    })
    .addCookieAuth('SESSION')
    .build();
  await SwaggerModule.loadPluginMetadata(metadata);
  const document = SwaggerModule.createDocument(app, options, {
    extraModels: [],
  });
  SwaggerModule.setup(apiPath, app, document);
};
