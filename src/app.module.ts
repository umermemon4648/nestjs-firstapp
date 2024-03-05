import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { mongooseConfig, connectToDB } from './config/db/mongoose.config';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    StudentModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({ useFactory: () => mongooseConfig }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    connectToDB();
  }
}
