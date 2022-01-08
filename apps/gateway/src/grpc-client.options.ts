import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `0.0.0.0:4001`,
    package: 'friend',
    protoPath: join(__dirname, 'assets/__proto/friend.proto'),
    loader: { keepCase: true },
  },
};
