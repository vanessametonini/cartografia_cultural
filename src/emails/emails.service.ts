import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailsService {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService
  ) {}

  private logoUrl = `https://www.cartografiadaculturacg.com.br/logo-cartografia.png`;

  async sendUserConfirmation(user: CreateUserDto) {
    const url = `${this.configService.get<string>('BASE_URL')}confirm-email/${user.confirmToken}`;
    await this.mailerService.sendMail({
      to: user.email,
      from: '"Cartografia da Cultura CG" <cartografiadaculturacg@gmail.com>', // override default from
      subject: 'Bem vindo(a)! Confirme seu cadastro!',
      template: 'confirmation', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: `${user.firstName} ${user.lastName}`,
        url,
        label:'Confirmar',
        logoUrl: this.logoUrl
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
        name: `${user.firstName} ${user.lastName}`,
        url,
        label:'Recuperar Senha',
        logoUrl: this.logoUrl
      },
    })
  }

}
