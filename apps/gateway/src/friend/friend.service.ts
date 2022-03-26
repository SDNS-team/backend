import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { map, Observable } from 'rxjs';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { CreateOneFriendArgs, FindManyFriendArgs, Friend, Friends } from './models';

interface FriendGrpcService {
  findMany(args: FindManyFriendArgs): Observable<Friends>;
  create(args: CreateOneFriendArgs): Observable<Friend>;
}

@Injectable()
export class FriendService implements OnModuleInit {
  private friendGrpcService: FriendGrpcService;

  constructor(@Inject(MicroserviceName.FRIEND_PACKAGE) private client: ClientGrpc) {}

  onModuleInit() {
    this.friendGrpcService = this.client.getService<FriendGrpcService>('FriendService');
  }

  findMany(args: FindManyFriendArgs): Observable<Friend[]> {
    return this.friendGrpcService.findMany(args).pipe(map(response => response.data));
  }

  create(args: CreateOneFriendArgs): Observable<Friend> {
    return this.friendGrpcService.create(args);
  }
}
