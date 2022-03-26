import { Type } from 'class-transformer';
import { FriendCreateInputDto } from './friend-create-input.dto';

export class CreateOneFriendArgsDto {
  @Type(_is => FriendCreateInputDto)
  data: FriendCreateInputDto;
}
