import { FindManyFriendArgs } from '@models/friend/find-many-friend.args';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { FriendResponse } from './models/friend.model';

interface FriendGrpcService {
  findMany(args: FindManyFriendArgs): Observable<FriendResponse>;
}

@Injectable()
export class FriendService implements OnModuleInit {
  private friendGrpcService: FriendGrpcService;

  constructor(@Inject(MicroserviceName.FRIEND_PACKAGE) private client: ClientGrpc) {}

  onModuleInit() {
    this.friendGrpcService = this.client.getService<FriendGrpcService>('FriendService');
  }

  findMany(args: FindManyFriendArgs): Observable<FriendResponse> {
    return this.friendGrpcService.findMany(args);
  }
}
