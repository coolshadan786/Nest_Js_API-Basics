
import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindTeacherResponseDTO } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@ApiTags('TeacherService')
@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(): FindTeacherResponseDTO[] {
    // return 'All Teachers are available';
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeachersById(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindTeacherResponseDTO {
    console.log(teacherId);
    // return `Get Teachers by Id with ${teacherId}`;
    return this.teacherService.getTeachersById(teacherId);
  }
}
