import { BadRequestException, Injectable } from '@nestjs/common';
import CreateCastMemberDto from './dto/create-cast-member.dto';
import { UpdateCastMemberDto } from './dto/update-cast-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CastMember } from './entities/cast-member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CastMembersService {
  constructor(
    @InjectRepository(CastMember)
    private castMembersRepo: Repository<CastMember>,
  ) {}
  create(createCastMemberDto: CreateCastMemberDto) {
    try {
      const newMember = this.castMembersRepo.create(createCastMemberDto);

      return this.castMembersRepo.save(newMember);
    } catch (error) {
      throw new BadRequestException('Couldnt create cast members');
    }
  }

  findAll() {
    return `This action returns all castMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} castMember`;
  }

  update(id: number, updateCastMemberDto: UpdateCastMemberDto) {
    return `This action updates a #${id} castMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} castMember`;
  }
}
