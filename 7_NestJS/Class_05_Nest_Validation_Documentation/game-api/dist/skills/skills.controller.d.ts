import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dtos/create-skill.dto';
export declare class SkillsController {
    private skillsService;
    constructor(skillsService: SkillsService);
    findAll(): Promise<import("./dtos/skill.dto").SkillDto[]>;
    findById(id: string): Promise<import("./dtos/skill.dto").SkillDto>;
    create(createData: CreateSkillDto): Promise<import("./dtos/skill.dto").SkillDto>;
}
