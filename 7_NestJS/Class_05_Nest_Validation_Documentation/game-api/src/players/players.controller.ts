import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { UpdatePlayerDto } from './dtos/update-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.playersService.findById(id);
  }

  @Post()
  create(@Body() createData: CreatePlayerDto) {
    return this.playersService.create(createData);
  }

  @HttpCode(204)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: UpdatePlayerDto) {
    return this.playersService.update(id, updateData);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.playersService.delete(id);
  }

  @HttpCode(200)
  @Post(':id/skills/:skillId')
  addSkill(@Param('id') id: string, @Param('skillId') skillId: string) {
    return this.playersService.addSkill(id, skillId);
  }

  @Get(':id/skills')
  findSkills(@Param('id') id: string) {
    return this.playersService.findSkills(id);
  }
}
