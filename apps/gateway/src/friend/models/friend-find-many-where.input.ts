import { DateTimeFilter, StringFilter } from '@models/prisma';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendFindManyWhereInput {
  @Field(_type => [FriendFindManyWhereInput], { nullable: true })
  AND?: Array<FriendFindManyWhereInput>;

  @Field(_type => [FriendFindManyWhereInput], { nullable: true })
  OR?: Array<FriendFindManyWhereInput>;

  @Field(_type => [FriendFindManyWhereInput], { nullable: true })
  NOT?: Array<FriendFindManyWhereInput>;

  @Field(_type => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(_type => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(_type => DateTimeFilter, { nullable: true })
  birthday?: DateTimeFilter;
}
