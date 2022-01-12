import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { FindManyFriendArgs } from '../@generated/friend/find-many-friend.args';
import { FriendResponse } from './models/friend.model';

interface FriendService {
  findMany(args: FindManyFriendArgs): Observable<FriendResponse>;
}

@Injectable()
export class FriendAppService implements OnModuleInit {
  private friendService: FriendService;

  constructor(@Inject('FRIEND_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.friendService = this.client.getService<FriendService>('FriendService');
  }

  findMany(args: FindManyFriendArgs): Observable<FriendResponse> {
    return this.friendService.findMany(args);
  }
}
