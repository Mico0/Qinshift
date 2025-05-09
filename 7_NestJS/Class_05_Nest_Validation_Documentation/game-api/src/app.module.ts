import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [PlayersModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
