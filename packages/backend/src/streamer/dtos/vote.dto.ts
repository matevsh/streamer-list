import { IsBoolean, IsNumber } from 'class-validator';

export class VoteDto {
  @IsBoolean()
  positive: boolean;

  @IsNumber()
  streamerId: number;
}
