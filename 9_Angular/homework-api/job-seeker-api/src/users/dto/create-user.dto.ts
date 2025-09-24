import { IsEmail, IsEnum, IsNumber, IsString, Length } from 'class-validator';

export enum WorkStatus {
  SEARCHING = 'searching',
  EMPLOYED = 'employed',
  UNEMPLOYED = 'unemployed',
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 30)
  password: string;

  @IsString()
  @Length(6, 20)
  username: string;

  @IsString()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsNumber()
  yearsOfExperience: number;

  @IsEnum(WorkStatus)
  workStatus: WorkStatus;
}
