import { IsString, IsOptional } from "class-validator";

export class CreateUserDto {

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  username: string;

  @IsString()
  password: string;
}