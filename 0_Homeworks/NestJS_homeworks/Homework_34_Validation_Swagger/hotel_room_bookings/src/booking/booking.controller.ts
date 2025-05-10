import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { CreateRoomDto } from './dtos/create-room.dto';
import { UpdateRoomDto } from './dtos/update-room.dto';
import { RoomFiltersDto } from './dtos/room-filters.dto';
import { RoomType } from './types/room-type.type';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @ApiOperation({ summary: 'Returns all hotel rooms' })
  @Get()
  getAllRooms(
    @Query('roomNumber') roomNumber: string,
    @Query('availability') availability: string,
    @Query('roomType') roomType: string,
    @Query('priceRange') priceRange: string,
  ) {
    const roomFilters: RoomFiltersDto = {};

    if (roomNumber) {
      roomFilters.roomNumber = !Number.isNaN(Number(roomNumber))
        ? Number(roomNumber)
        : null;
    }

    if (availability === 'true') {
      roomFilters.availability = true;
    } else if (availability === 'false') {
      roomFilters.availability = false;
    }

    if (roomType && Object.values(RoomType).includes(roomType as RoomType)) {
      roomFilters.roomType = roomType as RoomType;
    }

    if (priceRange) {
      const prices = priceRange.split(',').map((price) => parseInt(price));
      roomFilters.priceRange = prices;
    }

    // console.log(typeof roomFilters.availability);
    // console.log(roomFilters.priceRange);

    return this.bookingService.getAllRooms(roomFilters);
  }

  @ApiOperation({
    summary: 'Returns one hotel room based on the ID parameter sent in the URL',
  })
  @Get(':id')
  getRoom(@Param('id') id: string) {
    return this.bookingService.getRoom(id);
  }

  @ApiOperation({ summary: 'Creates a new room' })
  @Post()
  createRoom(@Body() data: CreateRoomDto) {
    return this.bookingService.createRoom(data);
  }

  @ApiOperation({ summary: 'Updates the room information' })
  @HttpCode(204)
  @Patch(':id')
  updateRoom(@Param('id') id: string, @Body() updateData: UpdateRoomDto) {
    return this.bookingService.updateRoom(id, updateData);
  }

  @ApiOperation({ summary: 'Removes a room by ID' })
  @HttpCode(204)
  @Delete(':id')
  deleteRoom(@Param('id') id: string) {
    return this.bookingService.deleteRoom(id);
  }
}
