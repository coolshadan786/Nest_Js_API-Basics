/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { CreateStudentDTO, FindStudentResponseDTO, StudentResponseDTO, UpdateStudentDTO } from './dto/student.dto';
import {v4 as uuid } from 'uuid';

@Injectable()
export class StudentService
{
    private student = students;
    
    getStudents (): FindStudentResponseDTO[]
    {
        return this.student;
    }

    getStudentById ( studentId: string ): FindStudentResponseDTO
    {
        return this.student.find( ( student ) =>
        {
            return student.id === studentId;
        } );
    }

    createStudent ( payload: CreateStudentDTO ): StudentResponseDTO
    {
        let newStudent = {
            id: uuid(),
            ...payload,
        };
        this.student.push( newStudent );
        return newStudent;
    }

    updateStudent ( payload: UpdateStudentDTO, studentId: string ):StudentResponseDTO
    {
        let updateStudent: StudentResponseDTO;

        let updateStudentList = this.student.map( ( student ) =>
        {
            if ( student.id === studentId )
            {
                updateStudent = {
                    id: studentId,
                    ...payload,
                };
                return updateStudent;
            } else return student;
        } );
        this.student = updateStudentList;
        return updateStudent;
    }

    getStudentByTeacherId ( teacherId: string ): FindStudentResponseDTO[]
    {
        return this.student.filter( ( student ) =>
        {
            return student.teacher === teacherId;
        } );
    }

    updateStudentTeacher ( teacherId: string, studentId: string ): StudentResponseDTO
    {
        let updateStudent: StudentResponseDTO;

        let updateStudentList = this.student.map( ( student ) =>
        {
            if ( student.id === studentId )
            {
                updateStudent = {
                    ...student,
                    teacher: teacherId,
                };
                return updateStudent;
            } else return student;
        } );
        this.student = updateStudentList;
        return updateStudent;
    }
}

// const x = new StudentService()

