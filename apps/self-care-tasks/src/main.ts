/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService = app.get(ConfigService);
  const config = configService.get('selfCareTasksApp');

  await app.listen(config.port);
  Logger.log(
    `🚀 Application is running on: ${config.protocol}://${config.host}:${config.port}`,
  );
}

bootstrap();
