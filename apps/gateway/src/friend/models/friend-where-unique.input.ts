import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendWhereUniqueInput {
  @Field(_type => String, { nullable: true })
  id?: string;
}
