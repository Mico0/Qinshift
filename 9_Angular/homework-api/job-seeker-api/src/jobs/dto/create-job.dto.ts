import { IsEnum, IsNumber, IsString, Min } from 'class-validator';
import { JobWorkType } from '../entities/job.entity';

export class CreateJobDto {
  @IsString()
  expires: string;

  @IsString()
  position: string;

  @IsNumber()
  @Min(0)
  startingSalary: number;

  @IsEnum(JobWorkType)
  workType: JobWorkType;

  @IsString()
  location: string;

  @IsString()
  country: string;

  @IsString()
  qualifications: string;

  @IsString()
  jobDescription: string;

  @IsString()
  companyName: string;

  @IsString()
  companyLogo: string;

  @IsString()
  companyAddress: string;

  @IsString()
  companyIndustry: string;

  @IsString()
  companyWebsite: string;
}
