import { Module } from '@nestjs/common';
import { CastMembersService } from './cast-members.service';
import { CastMembersController } from './cast-members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CastMember } from './entities/cast-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CastMember])],
  controllers: [CastMembersController],
  providers: [CastMembersService],
})
export class CastMembersModule {}
