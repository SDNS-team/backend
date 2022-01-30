import { registerEnumType } from '@nestjs/graphql';

export enum AuthProviderEnum {
    GOOGLE = "GOOGLE",
    FACEBOOK = "FACEBOOK",
    APPLE = "APPLE"
}


registerEnumType(AuthProviderEnum, { name: 'AuthProviderEnum', description: undefined })
