import { Friend } from '@models/friend/friend.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FriendResponse {
  @Field(() => [Friend], { nullable: true })
  values: Friend[];
}
