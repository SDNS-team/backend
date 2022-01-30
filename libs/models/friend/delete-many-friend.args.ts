import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendWhereInput } from './friend-where.input';

@ArgsType()
export class DeleteManyFriendArgs {

    @Field(() => FriendWhereInput, {nullable:true})
    where?: FriendWhereInput;
}
