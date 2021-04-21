import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Injectable()
export class EmailsService {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService
  ) {}

  async sendUserConfirmation(user: CreateUserDto) {
    const url = `${this.configService.get<string>('BASE_URL')}confirm-email/${user.confirmToken}`;
    await this.mailerService.sendMail({
      to: user.email,
      from: '"Cartografia da Cultura CG" <cartografiadaculturacg@gmail.com>', // override default from
      subject: 'Bem vindo(a)! Confirme seu cadastro!',
      template: 'confirmation', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: user.firstName,
        url,
        label:'Confirmar'
      },
    })
  }

  async sendRecoverPassword(user){
    const url = `${this.configService.get<string>('BASE_URL')}reset-password/${user.recoverToken}`;
    await this.mailerService.sendMail({
      to: user.email,
      from: '"Cartografia da Cultura CG" <cartografiadaculturacg@gmail.com>', // override default from
      subject: 'Recupere sua senha',
      template: 'recover', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: user.firstName,
        url,
        label:'Recuperar Senha'
      },
    })
  }

}
