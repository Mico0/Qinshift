import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { SkillsModule } from 'src/skills/skills.module';

@Module({
  imports: [SkillsModule],
  providers: [PlayersService],
  controllers: [PlayersController],
})
export class PlayersModule {}
