import { Controller, Request, Get, Post, UseGuards, Body, Param, Patch, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { ConfigService } from '@nestjs/config'
import { ChangePasswordDto } from './auth/dto/change-password.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private configService: ConfigService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('auth/signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto)
  }

  @Get('auth/confirm/:token')
  @Render('confirmation')
  async confirm(@Param('token') token: string) {
    const user = await this.authService.confirmEmail(token);
    return { name: user.firstName, url: `${this.configService.get<string>('BASE_URL')}signin`, label:'SignIn' }
  }

  @Post('auth/send-recover-email')
  async sendRecoverPasswordEmail(@Body('email') email: string) {
    await this.authService.sendRecoverPasswordEmail(email);
    return {
      message: 'Foi enviado um email com instruções para resetar sua senha',
    };
  }

  @Post('auth/reset-password/:token')
  async resetPassword(
    @Param('token') token: string,
    @Body() changePasswordDto: ChangePasswordDto,
  ): Promise<{ message: string }> {
    await this.authService.resetPassword(token, changePasswordDto);
    return {
      message: 'Senha alterada com sucesso',
    };
  }



}
