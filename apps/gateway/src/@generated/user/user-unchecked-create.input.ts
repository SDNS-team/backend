import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderEnum } from '../prisma/auth-provider.enum';

@InputType()
export class UserUncheckedCreateInput {

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

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;
}
