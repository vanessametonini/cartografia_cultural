import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.usersService.login(loginUserDto);
    if (user && user.password === loginUserDto.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}