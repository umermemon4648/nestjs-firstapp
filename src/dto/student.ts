import { IsString, IsNotEmpty, IsInt, Min, IsEmail } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  fatherName: string;

  @IsNotEmpty()
  @IsInt()
  @Min(10)
  age: number;

  @IsNotEmpty()
  @IsString()
  rollno: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString({ each: true })
  skills: string[];
}
