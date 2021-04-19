import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { EmailsService } from 'src/emails/emails.service';
import { randomBytes } from 'crypto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private emailservice: EmailsService,
  ) { }

  async signUp(createUserDto: CreateUserDto): Promise<any> {
    // const userAlreadyExists = await this.usersService.findByEmail(createUserDto.email);
    // if (userAlreadyExists) throw new ConflictException('User already exist');
    createUserDto.confirmToken = randomBytes(32).toString('hex');
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
    result.id = result._id;
    delete result._id;
    return {
      token: this.jwtService.sign({ id: result._id }),
      user: result
    };
  }


  async sendRecoverPasswordEmail(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user)
      throw new NotFoundException('Não há usuário cadastrado com esse email.');
    const token = randomBytes(32).toString('hex');
    const userUpdated = await this.usersService.findOneAndUpdate(
      { email: user.email },
      { recoverToken: token }
    )
    userUpdated.recoverToken = token;
    await this.emailservice.sendRecoverPassword(userUpdated);
  }

  async changePassword(
    id: string,
    changePasswordDto: ChangePasswordDto,
  ): Promise<void> {
    const { password, passwordConfirmation } = changePasswordDto;
    if (password != passwordConfirmation)
      throw new UnprocessableEntityException('As senhas não conferem');
    await this.usersService.changePassword(id, password);
  }

  async resetPassword(recoverToken, changePasswordDto) {
    const user = await this.usersService.findOneByProp({ recoverToken });
    if (!user) throw new NotFoundException('Token inválido.');
    try {
      await this.changePassword(user._id, changePasswordDto);
    } catch (error) {
      throw error;
    }

  }


}