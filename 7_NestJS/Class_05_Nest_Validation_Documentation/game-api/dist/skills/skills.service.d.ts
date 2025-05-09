import { SkillDto } from './dtos/skill.dto';
import { CreateSkillDto } from './dtos/create-skill.dto';
export declare class SkillsService {
    constructor();
    private SKILLS_PATH;
    findAll(): Promise<SkillDto[]>;
    save(skills: SkillDto[]): Promise<void>;
    findById(id: string): Promise<SkillDto>;
    create(createData: CreateSkillDto): Promise<SkillDto>;
}
