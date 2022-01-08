import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendUpdateInput } from './friend-update.input';
import { FriendWhereUniqueInput } from './friend-where-unique.input';

@ArgsType()
export class UpdateOneFriendArgs {

    @Field(() => FriendUpdateInput, {nullable:false})
    data!: FriendUpdateInput;

    @Field(() => FriendWhereUniqueInput, {nullable:false})
    where!: FriendWhereUniqueInput;
}
