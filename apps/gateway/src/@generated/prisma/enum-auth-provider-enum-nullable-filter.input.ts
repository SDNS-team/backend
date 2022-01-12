import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderEnum } from './auth-provider.enum';
import { NestedEnumAuthProviderEnumNullableFilter } from './nested-enum-auth-provider-enum-nullable-filter.input';

@InputType()
export class EnumAuthProviderEnumNullableFilter {

    @Field(() => AuthProviderEnum, {nullable:true})
    equals?: keyof typeof AuthProviderEnum;

    @Field(() => [AuthProviderEnum], {nullable:true})
    in?: Array<keyof typeof AuthProviderEnum>;

    @Field(() => [AuthProviderEnum], {nullable:true})
    notIn?: Array<keyof typeof AuthProviderEnum>;

    @Field(() => NestedEnumAuthProviderEnumNullableFilter, {nullable:true})
    not?: NestedEnumAuthProviderEnumNullableFilter;
}
