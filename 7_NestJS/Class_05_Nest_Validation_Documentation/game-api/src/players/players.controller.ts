import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dtos/create-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}
  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Post()
  create(@Body() createData: CreatePlayerDto) {
    return this.playersService.create(createData);
  }
}
