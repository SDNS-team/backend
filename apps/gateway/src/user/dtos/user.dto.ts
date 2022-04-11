import { Type } from 'class-transformer';
import { AuthProviderEnum } from '../models';

// TODO: вынести в общий класс id, createdAt, updatedAt, deleted. C friend также
export class UserDto {
  id: string;

  @Type(_is => Date)
  createdAt: Date;

  @Type(_is => Date)
  updatedAt: Date;

  deleted: boolean;
  name: string;
  provider: AuthProviderEnum;
  providerId: string;
  email: string;
  hashRefreshToken: string;
}
