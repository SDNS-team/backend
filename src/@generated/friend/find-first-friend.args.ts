import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendWhereInput } from './friend-where.input';
import { FriendOrderByWithRelationInput } from './friend-order-by-with-relation.input';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FriendScalarFieldEnum } from './friend-scalar-field.enum';

@ArgsType()
export class FindFirstFriendArgs {

    @Field(() => FriendWhereInput, {nullable:true})
    where?: FriendWhereInput;

    @Field(() => [FriendOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FriendOrderByWithRelationInput>;

    @Field(() => FriendWhereUniqueInput, {nullable:true})
    cursor?: FriendWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FriendScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FriendScalarFieldEnum>;
}
