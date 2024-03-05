import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateStudentDto } from 'src/dto/student';
import { Student } from 'src/schema/student.schema';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  // @Get('all')
  // @HttpCode(200)
  // findAllStudent(): {
  //   success: boolean;
  //   message: string;
  //   data: string;
  // } {
  //   return {
  //     success: true,
  //     message: 'Detail fetched',
  //     data: 'Returing all students',
  //   };
  // }

  constructor(private readonly studentService: StudentService) {}

  @Get('all')
  async fetchAllStudent(): Promise<Student[]> {
    return this.studentService.fetchAllStudent();
  }

  @Post('add')
  async create(@Body() student: Student): Promise<Student> {
    return this.studentService.create(student);
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: string,
    @Body() student: Student,
  ): Promise<Student> {
    return this.studentService.updateStudent(id, student);
  }

  @Get(':id')
  async findStudentDetail(@Param('id') id: string): Promise<Student> {
    return this.studentService.findStudentDetail(id);
  }
}
