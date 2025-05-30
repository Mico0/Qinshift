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
import { DirectorsService } from './directors.service';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { RoleType } from 'src/roles/roles.model';
import { Roles } from 'src/roles/roles.decorator';

@UseGuards(AuthGuard, RolesGuard)
@Controller('directors')
export class DirectorsController {
  constructor(private readonly directorsService: DirectorsService) {}

  @Roles(RoleType.ADMIN)
  @Post()
  create(@Body() createDirectorDto: CreateDirectorDto) {
    return this.directorsService.create(createDirectorDto);
  }

  @Roles(RoleType.ADMIN, RoleType.USER)
  @Get()
  findAll() {
    return this.directorsService.findAll();
  }

  @Roles(RoleType.ADMIN, RoleType.USER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directorsService.findOne(+id);
  }

  @Roles(RoleType.ADMIN)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDirectorDto: UpdateDirectorDto,
  ) {
    return this.directorsService.update(+id, updateDirectorDto);
  }

  @Roles(RoleType.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directorsService.remove(+id);
  }
}
