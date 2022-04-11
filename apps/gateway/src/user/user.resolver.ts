import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { GqlAuthGuard } from '../auth/token/guards/gql-auth.guard';
import { UserDto } from './dtos/user.dto';
import { User, UserEditArgs, UserFindOneArgs } from './models';
import { UserService } from './user.service';

// TODO: Добавить метод удаления(очистки) пользователя
@UseGuards(GqlAuthGuard)
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(_returns => User)
  findOneUser(@Args() args: UserFindOneArgs): Observable<UserDto> {
    return this.userService.findFirst({ ...args });
  }

  @Mutation(_returns => User)
  editUser(@Args() args: UserEditArgs): Observable<UserDto> {
    return this.userService.update({
      ...args,
    });
  }
}
