import { IsArray, IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @Length(3, 30)
  name: string;

  @IsNumber()
  @Min(0)
  health: number;

  @IsNumber()
  @Min(0)
  mana: number;

  @IsNumber()
  @Min(5)
  attack: number;

  @IsNumber()
  @Min(3)
  defense: number;

  @IsArray()
  @IsString({ each: true })
  inventory: string[];

  @IsNumber()
  @Min(1)
  @Max(70)
  level: number;
}
