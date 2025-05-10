"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const uuid_1 = require("uuid");
let BookingService = class BookingService {
    ROOMS_PATH = (0, path_1.join)(process.cwd(), 'src', 'booking', 'data', 'rooms.json');
    async getAllRooms(filters) {
        const roomsJson = await (0, promises_1.readFile)(this.ROOMS_PATH, 'utf-8');
        let rooms = JSON.parse(roomsJson);
        if (filters?.availability !== undefined) {
            rooms = rooms.filter((room) => room.isAvailable === filters.availability);
        }
        if (filters?.roomType) {
            rooms = rooms.filter((room) => room.type.includes(filters.roomType));
        }
        if (filters?.priceRange) {
            const [minPrice, maxPrice] = filters.priceRange;
            rooms = rooms.filter((room) => room.price >= minPrice && room.price <= maxPrice);
        }
        return rooms;
    }
    async getRoom(id) {
        const rooms = await this.getAllRooms();
        const foundRoom = rooms.find((room) => room.id === id);
        if (!foundRoom)
            throw new common_1.NotFoundException(`There is no room with id: ${id}s`);
        return foundRoom;
    }
    async saveBookings(rooms) {
        await (0, promises_1.writeFile)(this.ROOMS_PATH, JSON.stringify(rooms, null, 2), 'utf-8');
    }
    async createRoom(data) {
        const rooms = await this.getAllRooms();
        const createdRoom = {
            id: (0, uuid_1.v4)(),
            ...data,
        };
        rooms.push(createdRoom);
        this.saveBookings(rooms);
        return createdRoom;
    }
    async updateRoom(id, updateData) {
        const rooms = await this.getAllRooms();
        const roomIndex = rooms.findIndex((room) => room.id === id);
        if (roomIndex === -1)
            throw new common_1.NotFoundException(`Room with id: ${id} not found`);
        rooms[roomIndex] = { ...rooms[roomIndex], ...updateData };
        this.saveBookings(rooms);
        return rooms[roomIndex];
    }
    async deleteRoom(id) {
        const rooms = await this.getAllRooms();
        const filteredRooms = rooms.filter((room) => room.id !== id);
        if (filteredRooms.length === rooms.length)
            throw new common_1.NotFoundException('Error: Room not found and not deleted');
        this.saveBookings(filteredRooms);
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)()
], BookingService);
//# sourceMappingURL=booking.service.js.map