import { Type } from 'class-transformer';

export class FriendCreateInputDto {
  name: string;

  @Type(_is => Date)
  birthday: Date;

  description?: string;
}
