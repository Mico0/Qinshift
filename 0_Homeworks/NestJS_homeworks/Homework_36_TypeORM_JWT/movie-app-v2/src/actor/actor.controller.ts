import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { RoleType } from 'src/roles/roles.model';
import { Roles } from 'src/roles/roles.decorator';

@UseGuards(AuthGuard, RolesGuard)
@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Roles(RoleType.ADMIN)
  @Post()
  create(@Body() createActorDto: CreateActorDto) {
    return this.actorService.create(createActorDto);
  }

  @Roles(RoleType.ADMIN, RoleType.USER)
  @Get()
  findAll() {
    return this.actorService.findAll();
  }
  @Roles(RoleType.ADMIN, RoleType.USER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actorService.findOne(+id);
  }

  @Roles(RoleType.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return this.actorService.update(+id, updateActorDto);
  }

  @Roles(RoleType.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actorService.remove(+id);
  }
}
