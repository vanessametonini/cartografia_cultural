import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AddressDelimitationPipe implements PipeTransform {
 private configService = new ConfigService()
    transform(value: any, metadata: ArgumentMetadata) {
      const authorizedCity = this.configService.get<string>('AUTHORIZED_CITY');
      const city = value.city;
      
      if (city !== authorizedCity && city !== '') {
        throw new BadRequestException({error: 'Cidade inválida', message:`Não foi possível realizar seu cadastro. Insira um CEP dentro dos limites de ${authorizedCity}.` });
      }

      return value;
    }
}