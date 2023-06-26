import { IsNumber } from 'class-validator';

export class VoteDto {
  @IsNumber()
  streamerId: number;
}
