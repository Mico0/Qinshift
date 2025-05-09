import { PlayerDto } from './dtos/player.dto';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { UpdatePlayerDto } from './dtos/update-player.dto';
import { SkillsService } from 'src/skills/skills.service';
import { SkillDto } from 'src/skills/dtos/skill.dto';
export declare class PlayersService {
    private sklllsService;
    constructor(sklllsService: SkillsService);
    private PLAYERS_PATH;
    findAll(): Promise<PlayerDto[]>;
    findById(id: string): Promise<PlayerDto>;
    save(players: PlayerDto[]): Promise<void>;
    create(playerData: CreatePlayerDto): Promise<PlayerDto>;
    update(id: string, updateData: UpdatePlayerDto): Promise<void>;
    delete(id: string): Promise<void>;
    addSkill(id: string, skillId: string): Promise<{
        msg: string;
    }>;
    findSkills(id: string): Promise<SkillDto[]>;
}
