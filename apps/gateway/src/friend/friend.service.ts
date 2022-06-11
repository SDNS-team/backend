import { Injectable } from '@nestjs/common';
import { mergeMap, Observable } from 'rxjs';
import { UserSession } from '../common/interfaces/user-session.interface';
import { FriendDto } from './dtos/friend.dto';
import { FriendQueryService } from './friend-query.service';
import { FriendCreateArgs, FriendEditArgs, FriendFindManyArgs, FriendRemoveArgs } from './models';

@Injectable()
export class FriendService {
  constructor(private readonly friendQueryService: FriendQueryService) {}

  findMany({ where, take, skip, orderBy }: FriendFindManyArgs, session: UserSession): Observable<FriendDto[]> {
    return this.friendQueryService.findMany({
      where: {
        ...where,
        userId: session.uid,
      },
      take,
      skip,
      orderBy: {
        createdAt: orderBy,
      },
    });
  }

  create(args: FriendCreateArgs, session: UserSession): Observable<FriendDto> {
    return this.friendQueryService.create({
      data: {
        ...args,
        userId: session.uid,
      },
    });
  }

  edit(args: FriendEditArgs, session: UserSession): Observable<FriendDto> {
    return this.friendQueryService
      .findMany({
        where: {
          ...args.where,
          userId: session.uid,
        },
      })
      .pipe(mergeMap(() => this.friendQueryService.update(args)));
  }

  remove(args: FriendRemoveArgs, session: UserSession): Observable<boolean> {
    return this.friendQueryService
      .findMany({
        where: {
          ...args.where,
          userId: session.uid,
        },
      })
      .pipe(mergeMap(() => this.friendQueryService.delete(args)));
  }
}
