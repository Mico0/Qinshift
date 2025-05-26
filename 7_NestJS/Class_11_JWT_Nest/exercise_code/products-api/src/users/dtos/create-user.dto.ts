import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNegative,
  IsNumber,
  IsObject,
  IsSemVer,
  IsString,
  Length,
  Min,
  ValidateNested,
} from 'class-validator';
import { CreateUserAddressDto } from 'src/user-address/dto/create-user-address.dto';
import { UserAddress } from 'src/user-address/entities/user-address.entity';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(5, 50)
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

  @IsObject()
  @ValidateNested()
  @Type(() => CreateUserAddressDto)
  userAddress: CreateUserAddressDto;
}
