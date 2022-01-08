import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `0.0.0.0:4001`,
        package: 'friend',
        protoPath: join(__dirname, '../gateway/assets/__proto/friend.proto'),
        loader: { keepCase: true },
      },
    },
  );

  await app.listen();
  console.log(`Friend service is listening`);
}
bootstrap();
