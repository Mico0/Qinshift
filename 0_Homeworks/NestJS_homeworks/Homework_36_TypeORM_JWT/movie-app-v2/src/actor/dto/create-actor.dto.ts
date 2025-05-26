import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateActorDto {
  @ApiProperty({
    example: 'Keanu Reeves',
    description: 'First and last name of the actor',
  })
  @IsString()
  @Length(12, 60)
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    example: 1964,
    description: 'Actors birth year',
  })
  @IsNumber()
  @Min(1900)
  @Max(2000)
  birthYear: number;

  @IsArray()
  @IsString({ each: true })
  movies: string[];
}
