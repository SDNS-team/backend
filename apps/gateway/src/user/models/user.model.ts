import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../../../../libs/models/user/user.model';

@ObjectType()
export class UserResponse {
  @Field(type => [User], { nullable: true })
  values: User[];
}
