import { Controller, Get, Request, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { AuthGuard } from './auth/auth.guard';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndex(@Res() res: Response) {
    res.status(HttpStatus.BAD_REQUEST).json({
      status: HttpStatus.BAD_REQUEST,
      message: 'Bad Request !'
    })
  }

  @Get('ping')
  @UseGuards(AuthGuard)
  ping() {
    return { message: 'pong' };
  }
}
