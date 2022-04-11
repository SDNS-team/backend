import { ArgsType, Field } from '@nestjs/graphql';
import { UserFindOneWhereInput } from '..';

@ArgsType()
export class UserFindOneArgs {
  @Field(_type => UserFindOneWhereInput, { nullable: true })
  where?: UserFindOneWhereInput;
}
