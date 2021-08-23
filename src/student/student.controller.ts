/* eslint-disable prettier/prettier */
import { Body, Controller, Get,Param,ParseUUIDPipe,Post,Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentDTO, FindStudentResponseDTO, StudentResponseDTO, UpdateStudentDTO } from './dto/student.dto';
import { StudentService } from './student.service';

@ApiTags('StudentService')
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudents(): FindStudentResponseDTO[] {
    // return 'All Students are available';
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentResponseDTO {
    console.log(studentId);
    // return `Get Student By Id with ${studentId}`;
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDTO): StudentResponseDTO {
    console.log('Body', body);
    // return `Create Student with the following Data ${JSON.stringify(body)}`;
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDTO,
  ): StudentResponseDTO {
    console.log(studentId);
    console.log(body);
    // return `update Student with Id of ${studentId} with data of ${JSON.stringify(
    //   body,
    // )}`;
    return this.studentService.updateStudent(body, studentId);
  }
}
