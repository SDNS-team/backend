import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderEmun } from './auth-provider-emun.enum';
import { NestedEnumAuthProviderEmunNullableWithAggregatesFilter } from './nested-enum-auth-provider-emun-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumAuthProviderEmunNullableFilter } from './nested-enum-auth-provider-emun-nullable-filter.input';

@InputType()
export class EnumAuthProviderEmunNullableWithAggregatesFilter {

    @Field(() => AuthProviderEmun, {nullable:true})
    equals?: keyof typeof AuthProviderEmun;

    @Field(() => [AuthProviderEmun], {nullable:true})
    in?: Array<keyof typeof AuthProviderEmun>;

    @Field(() => [AuthProviderEmun], {nullable:true})
    notIn?: Array<keyof typeof AuthProviderEmun>;

    @Field(() => NestedEnumAuthProviderEmunNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAuthProviderEmunNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumAuthProviderEmunNullableFilter, {nullable:true})
    _min?: NestedEnumAuthProviderEmunNullableFilter;

    @Field(() => NestedEnumAuthProviderEmunNullableFilter, {nullable:true})
    _max?: NestedEnumAuthProviderEmunNullableFilter;
}
