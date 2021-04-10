import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

import { JwtService } from '@nestjs/jwt';
import { EmailsService } from 'src/emails/emails.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private emailservice: EmailsService,
  ) { }

  async signUp(createUserDto: CreateUserDto): Promise<any> {
    createUserDto.confirmToken = Math.floor(100000 + Math.random() * 900000).toString();
    const user = await this.usersService.create(createUserDto);
    await this.emailservice.sendUserConfirmation(user);
    return user;
  }

  async validateUser(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.usersService.findByEmail(loginUserDto.email);
    if (user && await user.comparePassword(loginUserDto.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const User = await this.usersService.findOne(user._doc._id);
    return {
      token: this.jwtService.sign({ id: user._doc._id }),
      user: User
    }
  }

  async confirmEmail(confirmToken: string): Promise<any> {
    const result = await this.usersService.findOneAndUpdate({ confirmToken }, { confirmToken: null });
    if (!result) throw new NotFoundException('Token inválido');
    return result;
  }
    

}