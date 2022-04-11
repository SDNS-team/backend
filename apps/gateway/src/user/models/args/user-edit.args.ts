import { ArgsType, Field } from '@nestjs/graphql';
import { UserEditInput, UserWhereUniqueInput } from '..';

@ArgsType()
export class UserEditArgs {
  @Field(_type => UserEditInput, { nullable: false })
  data!: UserEditInput;

  @Field(_type => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
}
