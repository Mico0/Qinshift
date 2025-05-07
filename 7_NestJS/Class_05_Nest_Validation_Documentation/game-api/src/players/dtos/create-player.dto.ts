import { IsNumber, IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsNumber()
  health: number;

  @IsNumber()
  mana: number;
}
