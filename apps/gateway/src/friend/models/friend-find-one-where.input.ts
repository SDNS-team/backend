import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendFindOneWhereInput {
  @Field(_type => String, { nullable: true })
  id?: string; // TODO: поменять на UUID
}
