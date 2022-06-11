import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { FirebaseAuthGuard } from '../auth/firebase/firebase.guard';
import { AuthSession } from '../common/decorators/auth-session.decorator';
import { UserSession } from '../common/interfaces/user-session.interface';
import { User } from './models/user.model';
import { UserService } from './user.service';

@UseGuards(FirebaseAuthGuard)
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(_returns => User)
  findMe(@AuthSession() session: UserSession) {
    return this.userService.findMe(session.uid);
  }
}
