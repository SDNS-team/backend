import { SortOrder } from '@models/prisma';
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { FriendFindManyWhereInput } from '.';

@ArgsType()
export class FriendFindManyArgs {
  @Field(_type => FriendFindManyWhereInput, { nullable: true })
  where?: FriendFindManyWhereInput;

  @Field(_type => SortOrder, { defaultValue: SortOrder.asc })
  orderBy: keyof typeof SortOrder;

  @Field(_type => Int, { defaultValue: 1 })
  page: number;

  @Field(_type => Int, { defaultValue: 10 })
  take: number;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
