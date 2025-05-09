import { CreatePlayerDto } from './create-player.dto';
export declare class PlayerDto extends CreatePlayerDto {
    id: string;
    skills: string[];
    experience: number;
}
