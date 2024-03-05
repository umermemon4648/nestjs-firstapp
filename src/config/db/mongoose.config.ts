import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';
import mongoose from 'mongoose';

const MONGO_URI =
  'mongodb+srv://memonumer504:revolutionary@clumongodbster0.yembrrq.mongodb.net/student-be';

export const mongooseConfig: MongooseModuleOptions = {
  uri: MONGO_URI,
};
export const connectToDB = async (): Promise<void> => {
  //   const uri = MONGO_URI;
  const logger = new Logger('DatabaseConnection');
  try {
    const connection = await mongoose.connect(MONGO_URI);
    // logger.log(`Connected to MongoDB at ${MONGO_URI}`);
    console.log(`🍀🍀🍀 Connected to MongoDB 🍀🍀🍀`);
  } catch (error) {
    logger.error(`Failed to connect to MongoDB. Error: ${error}`);
    throw error;
  }
};
