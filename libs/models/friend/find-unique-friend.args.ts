import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendWhereUniqueInput } from './friend-where-unique.input';

@ArgsType()
export class FindUniqueFriendArgs {

    @Field(() => FriendWhereUniqueInput, {nullable:false})
    where!: FriendWhereUniqueInput;
}
