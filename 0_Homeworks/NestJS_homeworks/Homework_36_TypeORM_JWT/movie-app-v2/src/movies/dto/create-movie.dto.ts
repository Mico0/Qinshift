import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Genre } from '../enums/genre.enum';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({
    example: 'Lord of The Rings: The fellowship of the ring',
    description: 'This is a Movie title',
  })
  @IsString()
  @MinLength(5)
  @MaxLength(256)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example:
      'The Lord of the Rings* is an epic high-fantasy trilogy by J.R.R. Tolkien, set in the richly detailed world of Middle-earth. It follows the journey of Frodo Baggins, a humble hobbit tasked with destroying the One Ring, a powerful artifact that corrupts its bearer and serves the Dark Lord Sauron. With the fate of the world at stake, Frodo is joined by a fellowship of heroes from different races who face treacherous landscapes, fierce battles, and moral trials in a quest to vanquish evil.\
',
    description: 'This is a Movie description, 512 characters long',
    minLength: 10,
    maxLength: 512,
  })
  @IsString()
  @MinLength(10)
  @MaxLength(512)
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 2001,
    description: 'This is the release year of the Movie',
  })
  @IsNumber()
  @IsNotEmpty()
  release_year: number;

  @ApiProperty({
    enum: Genre,
    description: "Possible values, 'action', 'comedy', 'sci_fi' , 'fantasy'",
  })
  @IsEnum(Genre)
  @IsNotEmpty()
  genre: Genre;

  @ApiProperty({
    example: 178,
    description: 'The duration of the Movie in minutes',
    minimum: 1,
    maximum: 500,
  })
  @Min(1)
  @Max(500)
  duration: number;

  @ApiProperty({
    example: 5,
    description: 'A number between 1 for lower and 10 for highest rating',
    minimum: 1,
    maximum: 10,
  })
  @IsNumber()
  @Min(1)
  @Max(10)
  rating: number;

  @ApiPropertyOptional({
    example: 'https://example.com/inception.jpg',
    description: 'Optional URL to the movie poster',
    minLength: 10,
    maxLength: 600,
  })
  @IsOptional()
  @IsUrl()
  @MinLength(10)
  @MaxLength(600)
  poster_url?: string;

  @ApiPropertyOptional({
    example: 'c0d165a3-5cd6-4fe3-b853-d45e2072b57b',
    description: 'Movie director ID',
  })
  @IsString()
  director: string;

  @ApiPropertyOptional({
    example: ['c0d165a3-5cd6-4fe3-b853-d45e2072b57b'],
    description: 'Movie director ID',
  })
  @IsArray()
  @IsString({ each: true })
  actors: [];

  @IsString()
  @IsOptional()
  createdBy?: string;
}
