import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { UpdatePlayerDto } from './dtos/update-player.dto';
export declare class PlayersController {
    private playersService;
    constructor(playersService: PlayersService);
    findAll(): Promise<import("./dtos/player.dto").PlayerDto[]>;
    findById(id: string): Promise<import("./dtos/player.dto").PlayerDto>;
    create(createData: CreatePlayerDto): Promise<import("./dtos/player.dto").PlayerDto>;
    update(id: string, updateData: UpdatePlayerDto): Promise<void>;
    delete(id: string): Promise<void>;
    addSkill(id: string, skillId: string): Promise<{
        msg: string;
    }>;
    findSkills(id: string): Promise<import("../skills/dtos/skill.dto").SkillDto[]>;
}
