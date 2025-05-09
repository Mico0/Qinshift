import { IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  @Length(3, 30)
  name: string;

  @IsNumber()
  @Min(0)
  damage: number;

  @IsNumber()
  @Min(0)
  heal: number;

  @IsNumber()
  @Min(0)
  manaCost: number;

  @IsNumber()
  @Min(0)
  cooldown: number;

  @IsString()
  @Length(3, 100)
  description: string;
}
