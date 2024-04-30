import { IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateAdminDto {
  @IsNotEmpty({ message: 'empty value! Name cannot be empty' })
  @Length(2)
  @IsString()
  productName: string;
  @Length(50)
  @IsNotEmpty({ message: 'empty value! username cannot be empty' })
  brand: string;
  @IsNotEmpty({ message: 'empty value! company name cannot be empty' })
  @Length(50)
  price: string;
  @IsNotEmpty({ message: 'empty value! phone number cannot be empty' })
  @Length(50)
  quantity: string;
}
