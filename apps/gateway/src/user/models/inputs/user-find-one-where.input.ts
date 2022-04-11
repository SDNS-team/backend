import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserFindOneWhereInput {
  @Field(_type => String, { nullable: true })
  id?: string;
}
