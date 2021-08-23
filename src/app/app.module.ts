/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentModule } from 'src/student/student.module';
import { StudentService } from 'src/student/student.service';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { TeacherModule } from 'src/teacher/teacher.module';
import { TeacherService } from 'src/teacher/teacher.service';

@Module({
  imports: [StudentModule,TeacherModule],
  // controllers: [ StudentController, TeacherController, StudentTeacherController ],
  // providers:[StudentService,TeacherService]
})
export class AppModule {}
