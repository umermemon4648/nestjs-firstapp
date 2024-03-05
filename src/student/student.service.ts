import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from 'src/schema/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student')
    private readonly studentModel: Model<Student>,
  ) {}

  async fetchAllStudent(): Promise<Student[]> {
    return await this.studentModel.find().exec();
  }
  async create(student: Student): Promise<Student> {
    const newStudent = new this.studentModel(student);
    return await newStudent.save();
  }

  async findStudentDetail(id: string): Promise<Student> {
    return await this.studentModel.findById(id).exec();
  }
  async updateStudent(id: string, student: Student): Promise<Student> {
    return await this.studentModel.findOneAndUpdate({ _id: id }, student, {
      new: true,
    });
  }
}
