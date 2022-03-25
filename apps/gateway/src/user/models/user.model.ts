import { User } from '@models/user/user.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserResponse {
  @Field(type => [User], { nullable: true })
  values: User[];
}
