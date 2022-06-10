import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import admin, { credential } from 'firebase-admin';
import * as serviceAccount from '../../../serviceAccountKey.json';
import { AppModule } from './app.module';
import { ConfigService } from './common/configs/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  if (!configService.isProduction) {
    const options = new DocumentBuilder().setTitle(configService.appName).build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document, {
      swaggerOptions: {
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
      },
    });
  }

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  admin.initializeApp({
    credential: credential.cert({
      projectId: serviceAccount.project_id,
      privateKey: serviceAccount.private_key,
      clientEmail: serviceAccount.client_email,
    }),
  });

  await app.listen(configService.port, configService.host);
  console.log(`Application is running on: ${await app.getUrl()}/api`);
}
bootstrap();
