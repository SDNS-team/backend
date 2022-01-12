import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderEnum } from './auth-provider.enum';
import { NestedEnumAuthProviderEnumNullableWithAggregatesFilter } from './nested-enum-auth-provider-enum-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumAuthProviderEnumNullableFilter } from './nested-enum-auth-provider-enum-nullable-filter.input';

@InputType()
export class EnumAuthProviderEnumNullableWithAggregatesFilter {

    @Field(() => AuthProviderEnum, {nullable:true})
    equals?: keyof typeof AuthProviderEnum;

    @Field(() => [AuthProviderEnum], {nullable:true})
    in?: Array<keyof typeof AuthProviderEnum>;

    @Field(() => [AuthProviderEnum], {nullable:true})
    notIn?: Array<keyof typeof AuthProviderEnum>;

    @Field(() => NestedEnumAuthProviderEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAuthProviderEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumAuthProviderEnumNullableFilter, {nullable:true})
    _min?: NestedEnumAuthProviderEnumNullableFilter;

    @Field(() => NestedEnumAuthProviderEnumNullableFilter, {nullable:true})
    _max?: NestedEnumAuthProviderEnumNullableFilter;
}
