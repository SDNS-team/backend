import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderEnum } from './auth-provider.enum';

@InputType()
export class NestedEnumAuthProviderEnumNullableFilter {

    @Field(() => AuthProviderEnum, {nullable:true})
    equals?: keyof typeof AuthProviderEnum;

    @Field(() => [AuthProviderEnum], {nullable:true})
    in?: Array<keyof typeof AuthProviderEnum>;

    @Field(() => [AuthProviderEnum], {nullable:true})
    notIn?: Array<keyof typeof AuthProviderEnum>;

    @Field(() => NestedEnumAuthProviderEnumNullableFilter, {nullable:true})
    not?: NestedEnumAuthProviderEnumNullableFilter;
}
