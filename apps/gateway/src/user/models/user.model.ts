import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../@generated/user/user.model';

@ObjectType()
export class UserResponse {
  @Field(() => [User], { nullable: true })
  values: User[];
}
