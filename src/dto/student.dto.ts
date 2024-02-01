import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  readonly roleNumber: string;

  @IsString()
  @IsNotEmpty()
  readonly gender: string;

  @IsNumber()
  readonly age: number;

  @IsNotEmpty()
  @IsString()
  readonly universityName: string;
}
