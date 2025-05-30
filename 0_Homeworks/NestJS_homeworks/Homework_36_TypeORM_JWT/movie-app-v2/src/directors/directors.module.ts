import { Module } from '@nestjs/common';
import { DirectorsService } from './directors.service';
import { DirectorsController } from './directors.controller';
import { Director } from './entities/director.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Director]), UsersModule],
  controllers: [DirectorsController],
  providers: [DirectorsService],
})
export class DirectorsModule {}
