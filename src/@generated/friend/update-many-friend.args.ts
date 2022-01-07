import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendUpdateManyMutationInput } from './friend-update-many-mutation.input';
import { FriendWhereInput } from './friend-where.input';

@ArgsType()
export class UpdateManyFriendArgs {

    @Field(() => FriendUpdateManyMutationInput, {nullable:false})
    data!: FriendUpdateManyMutationInput;

    @Field(() => FriendWhereInput, {nullable:true})
    where?: FriendWhereInput;
}
