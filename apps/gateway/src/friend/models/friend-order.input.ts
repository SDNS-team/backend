import { SortOrder } from '@models/prisma';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendOrderInput {
  @Field(_type => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
}
