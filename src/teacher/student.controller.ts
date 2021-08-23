/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindStudentResponseDTO, StudentResponseDTO } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@ApiTags('StudentTeacherService')
@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentResponseDTO[] {
    console.log(teacherId);
    // return `Get all student that belong to a ${teacherId}`;
    return this.studentService.getStudentByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body,
  ): StudentResponseDTO {
    console.log(studentId, teacherId);
    console.log(body);
    // return `Update ${studentId} that belong to a ${teacherId}`;
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
