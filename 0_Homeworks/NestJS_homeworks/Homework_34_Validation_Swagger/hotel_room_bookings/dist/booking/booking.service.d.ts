import { RoomDto } from './dtos/room.dto';
import { CreateRoomDto } from './dtos/create-room.dto';
import { UpdateRoomDto } from './dtos/update-room.dto';
import { RoomFiltersDto } from './dtos/room-filters.dto';
export declare class BookingService {
    private ROOMS_PATH;
    getAllRooms(filters?: RoomFiltersDto): Promise<RoomDto[]>;
    getRoom(id: string): Promise<RoomDto>;
    saveBookings(rooms: RoomDto[]): Promise<void>;
    createRoom(data: CreateRoomDto): Promise<RoomDto>;
    updateRoom(id: string, updateData: UpdateRoomDto): Promise<RoomDto>;
    deleteRoom(id: string): Promise<void>;
}
