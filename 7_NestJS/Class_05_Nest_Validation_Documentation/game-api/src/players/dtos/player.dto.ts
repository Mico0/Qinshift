import { CreatePlayerDto } from './create-player.dto';

export class PlayerDto extends CreatePlayerDto {
  id: string;
  skills: string[];
  experience: number;
}
