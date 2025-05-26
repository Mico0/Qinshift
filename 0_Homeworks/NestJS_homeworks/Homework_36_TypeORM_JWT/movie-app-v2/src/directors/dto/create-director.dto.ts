import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateDirectorDto {
  @ApiProperty({
    example: 'Peter Jackson',
    description: 'First and last name of the movie director',
  })
  @IsString()
  @Length(12, 60)
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    example: 1961,
    description: "Director's birth year",
  })
  @IsNumber()
  @Min(1940)
  @Max(2000)
  birthYear: number;
}
