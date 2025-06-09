import { Module } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { AwardsController } from './awards.controller';
import { Award } from './entities/award.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Award])],
  controllers: [AwardsController],
  providers: [AwardsService],
})
export class AwardsModule {}
