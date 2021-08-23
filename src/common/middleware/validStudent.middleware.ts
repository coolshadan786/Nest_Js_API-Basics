/* eslint-disable prettier/prettier */
import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { students } from 'src/db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
    use (req: Request,res: Response, next: NextFunction)
    {
        console.log("This Middleware is called");
        
        const studentId = req.params.studentId;
        const studentExists = students.some( student => { return student.id === studentId } );
        if ( !studentExists )
        {
            throw new HttpException("Student not found",400)
        }
        next()
    }
}