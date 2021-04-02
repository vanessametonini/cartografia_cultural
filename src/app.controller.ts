import { Controller, Request, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    req.user._doc.id = req.user._doc._id;
    delete req.user._doc._id
    delete req.user._doc.__v
    return req.user._doc;
  }
}
