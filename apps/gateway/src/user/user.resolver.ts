import { Resolver } from '@nestjs/graphql';
import { User } from '../@generated/user/user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
}
