import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dtos/create-skill.dto';

@Controller('skills')
export class SkillsController {
  constructor(private skillsService: SkillsService) {}

  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.skillsService.findById(id);
  }

  @Post()
  create(@Body() createData: CreateSkillDto) {
    return this.skillsService.create(createData);
  }
}
