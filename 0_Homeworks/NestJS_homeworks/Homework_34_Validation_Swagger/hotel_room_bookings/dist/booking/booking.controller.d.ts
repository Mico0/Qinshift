import { BookingService } from './booking.service';
import { CreateRoomDto } from './dtos/create-room.dto';
import { UpdateRoomDto } from './dtos/update-room.dto';
export declare class BookingController {
    private bookingService;
    constructor(bookingService: BookingService);
    getAllRooms(roomNumber: string, availability: string, roomType: string, priceRange: string): Promise<import("./dtos/room.dto").RoomDto[]>;
    getRoom(id: string): Promise<import("./dtos/room.dto").RoomDto>;
    createRoom(data: CreateRoomDto): Promise<import("./dtos/room.dto").RoomDto>;
    updateRoom(id: string, updateData: UpdateRoomDto): Promise<import("./dtos/room.dto").RoomDto>;
    deleteRoom(id: string): Promise<void>;
}
