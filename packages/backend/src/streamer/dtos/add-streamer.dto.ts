import { IsString } from 'class-validator';

export class AddStreamerDto {
  @IsString()
  name: string;

  @IsString()
  platform: string;

  @IsString()
  description: string;
}
