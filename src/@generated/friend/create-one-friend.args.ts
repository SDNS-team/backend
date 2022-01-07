import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendCreateInput } from './friend-create.input';

@ArgsType()
export class CreateOneFriendArgs {

    @Field(() => FriendCreateInput, {nullable:false})
    data!: FriendCreateInput;
}
