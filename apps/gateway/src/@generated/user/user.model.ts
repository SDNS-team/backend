import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AuthProviderEnum } from '../prisma/auth-provider.enum';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => AuthProviderEnum, {nullable:true})
    provider!: keyof typeof AuthProviderEnum | null;

    @Field(() => String, {nullable:true})
    providerId!: string | null;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    refreshToken!: string | null;
}
