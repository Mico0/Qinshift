import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { SkillDto } from './dtos/skill.dto';
import { write } from 'node:fs';
import { CreateSkillDto } from './dtos/create-skill.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class SkillsService {
  constructor() {
    console.log('skill service created');
  }

  private SKILLS_PATH = join(process.cwd(), 'data', 'skills.json');

  async findAll() {
    const skillsJSON = await readFile(this.SKILLS_PATH, 'utf-8');

    const skills = JSON.parse(skillsJSON) as SkillDto[];

    return skills;
  }

  async save(skills: SkillDto[]) {
    await writeFile(this.SKILLS_PATH, JSON.stringify(skills, null, 2));
  }

  async findById(id: string) {
    const skills = await this.findAll();

    const foundSkill = skills.find((skill) => skill.id === id);

    if (!foundSkill) throw new NotFoundException('skill not found');

    return foundSkill;
  }

  async create(createData: CreateSkillDto) {
    const skills = await this.findAll();

    const newSkill: SkillDto = {
      id: uuid(),
      ...createData,
    };

    const updatedSkills = [...skills, newSkill];

    await this.save(updatedSkills);

    return newSkill;
  }
}
