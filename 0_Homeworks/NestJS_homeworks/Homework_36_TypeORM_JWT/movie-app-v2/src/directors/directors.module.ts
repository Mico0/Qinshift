import { Module } from '@nestjs/common';
import { DirectorsService } from './directors.service';
import { DirectorsController } from './directors.controller';
import { Director } from './entities/director.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Director])],
  controllers: [DirectorsController],
  providers: [DirectorsService],
})
export class DirectorsModule {}
