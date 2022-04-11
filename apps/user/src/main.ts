import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ConfigService } from './common/configs/config.service';

async function bootstrap() {
  const configService: ConfigService = new ConfigService();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, configService.microserviceOptions);
  await app.listen();
  console.log(`App ${configService.appName} is listening`);
}
bootstrap();
