import { IsEmail, IsString, Length, IsNumber, Min } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 30)
  password: string;

  @IsString()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsNumber()
  @Min(16)
  age: number;
}
