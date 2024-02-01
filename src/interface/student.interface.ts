import { Document } from 'mongoose';
export interface IStudent extends Document {
  readonly name: string;
  readonly roleNumber: string;
  readonly gender: string;
  readonly age: number;
  readonly universityName: string;
}
