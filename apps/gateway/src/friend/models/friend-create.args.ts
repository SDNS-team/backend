import { ArgsType, Field, GraphQLISODateTime, ID } from '@nestjs/graphql';

@ArgsType()
export class FriendCreateArgs {
  @Field(_type => ID)
  name!: string;

  @Field(_type => GraphQLISODateTime)
  birthday!: Date;

  @Field(_type => String, { nullable: true })
  description?: string;
}
