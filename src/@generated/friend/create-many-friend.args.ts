import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendCreateManyInput } from './friend-create-many.input';

@ArgsType()
export class CreateManyFriendArgs {

    @Field(() => [FriendCreateManyInput], {nullable:false})
    data!: Array<FriendCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
