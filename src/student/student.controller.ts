import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateStudentDto } from 'src/dto/student';

@Controller('student')
export class StudentController {
  @Get('all')
  @HttpCode(200)
  findAllStudent(): {
    success: boolean;
    message: string;
    data: string;
  } {
    return {
      success: true,
      message: 'Detail fetched',
      data: 'Returing all students',
    };
  }

  @Post('add')
  @HttpCode(201)
  addStudent(@Body(new ValidationPipe()) createStudentDto: CreateStudentDto): {
    success: boolean;
    message: string;
    data: CreateStudentDto;
  } {
    console.log('createStudentDto .........', createStudentDto);

    return {
      success: true,
      message: 'Student added successfully',
      data: createStudentDto,
    };
  }
}
