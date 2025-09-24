import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './entities/job.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private jobRepo: Repository<Job>) {}

  create(createJobDto: CreateJobDto) {
    return this.jobRepo.save(createJobDto);
  }

  createMany(createJobDtoArray: CreateJobDto[]) {
    return this.jobRepo.save(createJobDtoArray);
  }

  findAll() {
    return this.jobRepo.find({});
  }

  async findOne(id: number) {
    const foundJob = await this.jobRepo.findOneBy({ id });

    if (!foundJob) throw new NotFoundException('Job not found');

    return foundJob;
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    const foundJob = await this.findOne(id);

    Object.assign(foundJob, updateJobDto);

    return this.jobRepo.save(foundJob);
  }

  async remove(id: number) {
    const foundJob = await this.findOne(id);

    return this.jobRepo.remove(foundJob);
  }
}
