import { Field, ObjectType } from '@nestjs/graphql';
import { Friend } from '../../../../../libs/models/friend/friend.model';

@ObjectType()
export class FriendResponse {
  @Field(() => [Friend], { nullable: true })
  values: Friend[];
}
