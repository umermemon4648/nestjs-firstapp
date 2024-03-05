import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Student {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  fatherName: string;

  @Prop()
  age: number;

  @Prop()
  rollno: string;

  @Prop()
  city: string;

  @Prop()
  skills: string[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
