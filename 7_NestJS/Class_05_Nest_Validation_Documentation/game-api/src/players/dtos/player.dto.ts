import { CreatePlayerDto } from './create-player.dto';

export class PlayerDto extends CreatePlayerDto {
  skills: string[];
  id: string;
  experience: number;
}
