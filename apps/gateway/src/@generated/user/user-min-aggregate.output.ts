import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthProviderEnum } from '../prisma/auth-provider.enum';

@ObjectType()
export class UserMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => AuthProviderEnum, {nullable:true})
    provider?: keyof typeof AuthProviderEnum;

    @Field(() => String, {nullable:true})
    providerId?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;
}
