import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum JobWorkType {
  REMOTE = 'remote',
  ONSITE = 'onsite',
  HYBRID = 'hybrid',
}

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expires: Date;

  @Column()
  position: string;

  @Column()
  startingSalary: number;

  @Column({ enum: JobWorkType })
  workType: JobWorkType;

  @Column()
  location: string;

  @Column()
  country: string;

  @Column()
  qualifications: string;

  @Column()
  jobDescription: string;

  @Column()
  companyName: string;

  @Column()
  companyLogo: string;

  @Column()
  companyAddress: string;

  @Column()
  companyIndustry: string;

  @Column()
  companyWebsite: string;
}
