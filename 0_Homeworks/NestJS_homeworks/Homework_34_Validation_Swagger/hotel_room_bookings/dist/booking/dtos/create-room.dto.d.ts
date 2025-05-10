import { RoomType } from '../types/room-type.type';
export declare class CreateRoomDto {
    roomNumber: number;
    type: RoomType;
    price: number;
    isAvailable: boolean;
    amenities: string[];
    maxOccupancy: number;
    lastCleaned: string;
    maintenanceNotes?: string;
}
