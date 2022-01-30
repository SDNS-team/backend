import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { FriendCreateInput } from './friend-create.input';
import { FriendUpdateInput } from './friend-update.input';

@ArgsType()
export class UpsertOneFriendArgs {

    @Field(() => FriendWhereUniqueInput, {nullable:false})
    where!: FriendWhereUniqueInput;

    @Field(() => FriendCreateInput, {nullable:false})
    create!: FriendCreateInput;

    @Field(() => FriendUpdateInput, {nullable:false})
    update!: FriendUpdateInput;
}
