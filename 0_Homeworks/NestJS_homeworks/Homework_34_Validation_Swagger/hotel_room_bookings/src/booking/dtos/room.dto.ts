import { ApiProperty } from '@nestjs/swagger';
import { CreateRoomDto } from './create-room.dto';

export class RoomDto extends CreateRoomDto {
  @ApiProperty({
    description: 'Room ID, a valid UUID string',
    example: '993a8e77-6484-49fd-ae75-1bdaec9e5126',
  })
  id: string;
}
