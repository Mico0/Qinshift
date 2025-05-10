import { RoomType } from '../types/room-type.type';

export class RoomFiltersDto {
  roomNumber?: number | null;
  roomType?: RoomType | undefined;
  priceRange?: number[] | null;
  availability?: boolean | undefined;
}
