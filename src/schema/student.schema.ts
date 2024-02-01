import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Student {
  @Prop()
  name: string;

  @Prop()
  roleNumber: string;

  @Prop()
  gender: string;

  @Prop()
  age: number;

  @Prop()
  universityName: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
