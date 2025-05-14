import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserAddressDto {
  @IsString()
  @Length(3, 30)
  country: string;

  @IsString()
  @Length(3, 30)
  city: string;

  @IsString()
  @Length(3, 30)
  street: string;

  @IsString()
  @Length(4, 10)
  zipCode: string;

  @IsOptional()
  @IsString()
  user: string;
}
