import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserWhereUniqueInput {
  @Field(_type => String, { nullable: true })
  id?: string;
}
