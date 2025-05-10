import {
  IsArray,
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { RoomType } from '../types/room-type.type';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateRoomDto {
  @ApiProperty({
    description: 'The hotel room number',
    minimum: 1,
    maximum: 999,
  })
  @IsNumber()
  @Min(1)
  @Max(999)
  roomNumber: number;

  @ApiProperty({
    enum: RoomType,
    description: 'Hotel room type, must be a part of the enum RoomType',
    example: 'Single',
  })
  @IsEnum(RoomType)
  type: RoomType;

  @ApiProperty({
    description: 'Room price',
    minimum: 50,
    maximum: 1000,
    example: 348,
  })
  @IsNumber()
  @Min(50)
  @Max(1000)
  price: number;

  @ApiProperty({
    description: 'Displays room availability true if available or false if not',
    example: true,
  })
  @IsBoolean()
  isAvailable: boolean;

  @ApiProperty({
    description: 'An array of room amenities if any',
    example: ['Wi-Fi'],
  })
  @IsArray()
  @IsString({ each: true })
  amenities: string[];

  @ApiProperty({
    description: 'A number of max occupancy in one room',
    example: 3,
  })
  @IsNumber()
  @Min(1)
  @Max(5)
  maxOccupancy: number;

  @ApiProperty({
    description: 'A valid date string',
    example: '2025-05-08T14:30:00.000Z',
  })
  @IsDate()
  @Type(() => Date)
  lastCleaned: Date;

  @ApiPropertyOptional({
    description: 'An optional string of maintenance notes',
    example: 'Bathroom toilet clogged',
  })
  @IsOptional({ always: true })
  @IsString()
  @Length(5, 300)
  maintenanceNotes?: string;
}
