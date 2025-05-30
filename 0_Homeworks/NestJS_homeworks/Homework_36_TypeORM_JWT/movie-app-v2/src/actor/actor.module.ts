import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { Actor } from './entities/actor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Actor]), UsersModule],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}
