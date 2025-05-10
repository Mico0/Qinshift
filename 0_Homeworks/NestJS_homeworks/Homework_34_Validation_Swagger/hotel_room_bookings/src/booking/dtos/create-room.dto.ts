import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { RoomType } from '../types/room-type.type';
export class CreateRoomDto {
  @IsNumber()
  @Min(1)
  @Max(999)
  roomNumber: number;

  @IsEnum(RoomType)
  type: RoomType;

  @IsNumber()
  @Min(50)
  @Max(1000)
  price: number;

  @IsBoolean()
  isAvailable: boolean;

  @IsArray()
  @IsString({ each: true })
  amenities: string[];

  @IsNumber()
  @Min(1)
  @Max(5)
  maxOccupancy: number;

  @IsDateString()
  lastCleaned: string;

  @IsString()
  @Length(5, 50)
  maintenanceNotes?: string;
}
