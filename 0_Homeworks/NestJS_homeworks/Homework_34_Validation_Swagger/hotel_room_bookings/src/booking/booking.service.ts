import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { RoomDto } from './dtos/room.dto';
import { CreateRoomDto } from './dtos/create-room.dto';
import { v4 as uuid } from 'uuid';
import { UpdateRoomDto } from './dtos/update-room.dto';
import { RoomFiltersDto } from './dtos/room-filters.dto';
import { max } from 'class-validator';

@Injectable()
export class BookingService {
  private ROOMS_PATH = join(
    process.cwd(),
    'src',
    'booking',
    'data',
    'rooms.json',
  );

  async getAllRooms(filters?: RoomFiltersDto) {
    const roomsJson = await readFile(this.ROOMS_PATH, 'utf-8');

    let rooms = JSON.parse(roomsJson) as RoomDto[];

    if (filters?.availability !== undefined) {
      rooms = rooms.filter(
        (room) => room.isAvailable === (filters.availability as boolean),
      );
    }

    if (filters?.roomType) {
      rooms = rooms.filter((room) =>
        room.type.includes(filters.roomType as string),
      );
    }

    if (filters?.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange;
      rooms = rooms.filter(
        (room) => room.price >= minPrice && room.price <= maxPrice,
      );
    }

    return rooms;
  }

  async getRoom(id: string) {
    const rooms = await this.getAllRooms();

    const foundRoom = rooms.find((room) => room.id === id);

    if (!foundRoom)
      throw new NotFoundException(`There is no room with id: ${id}s`);

    return foundRoom;
  }

  async saveBookings(rooms: RoomDto[]) {
    await writeFile(this.ROOMS_PATH, JSON.stringify(rooms, null, 2), 'utf-8');
  }

  async createRoom(data: CreateRoomDto) {
    const rooms = await this.getAllRooms();

    const createdRoom: RoomDto = {
      id: uuid(),
      ...data,
    };

    rooms.push(createdRoom);

    this.saveBookings(rooms);

    return createdRoom;
  }

  async updateRoom(id: string, updateData: UpdateRoomDto) {
    const rooms = await this.getAllRooms();

    const roomIndex = rooms.findIndex((room) => room.id === id);

    if (roomIndex === -1)
      throw new NotFoundException(`Room with id: ${id} not found`);

    rooms[roomIndex] = { ...rooms[roomIndex], ...updateData };

    this.saveBookings(rooms);

    return rooms[roomIndex];
  }

  async deleteRoom(id: string) {
    const rooms = await this.getAllRooms();

    const filteredRooms = rooms.filter((room) => room.id !== id);

    if (filteredRooms.length === rooms.length)
      throw new NotFoundException('Error: Room not found and not deleted');

    this.saveBookings(filteredRooms);
  }
}
