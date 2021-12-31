import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compress from 'fastify-compress';
import helmet from 'fastify-helmet';
import fastifyMultipart from 'fastify-multipart';
import { AppModule } from './app.module';
import { ConfigService } from './common/configs/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const configService = app.get(ConfigService);

  if (!configService.isProduction) {
    const options = new DocumentBuilder()
      .setTitle(configService.appName)
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document, {
      swaggerOptions: {
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
      },
    });
  }

  app.register(helmet);
  app.register(compress);
  app.register(fastifyMultipart);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  await app.listen(configService.port, configService.host);
  console.log(`Application is running on: ${await app.getUrl()}/api`);
}
bootstrap();
