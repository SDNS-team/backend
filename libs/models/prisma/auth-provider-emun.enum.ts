import { registerEnumType } from '@nestjs/graphql';

export enum AuthProviderEmun {
    GOOGLE = "GOOGLE",
    FACEBOOK = "FACEBOOK",
    APPLE = "APPLE"
}


registerEnumType(AuthProviderEmun, { name: 'AuthProviderEmun', description: undefined })
