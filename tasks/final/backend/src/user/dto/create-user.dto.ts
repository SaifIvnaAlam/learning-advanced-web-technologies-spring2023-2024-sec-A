import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(2)
  @IsString()
  name: string;
  @IsNotEmpty()
  @Length(4)
  @IsString()
  username: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  date: string;
  @IsString()
  @IsNotEmpty()
  phonenumber: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
