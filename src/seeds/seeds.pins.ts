import { Injectable } from '@nestjs/common';
import { PinsService } from '../pins/pins.service';

export const pins = (categories, users) => {
    const pins = [
        {
            title: 'Brava',
            email: 'brava@email.com',
            phone: '(67) 3253-3795',
            street: 'Av Calógeras',
            number: 3100,
            neighborhood: 'Centro',
            city: 'Campo Crande',
            zipcode: 79004381,
            description: 'Muito mais que um bar, um Bar',
            lat: -20.453422,
            long: -54.620065,
            facebook: 'https://www.facebook.com/brava3100',
            instagram: 'https://www.instagram.com/brava3100/',
            twitter: 'https://twitter.com',
            whatsapp: 'https://whatsapp.com'
          },
          {
            title: 'Casa Colonial',
            email: 'casacolonial@email.com',
            phone: '(67) 3383-3207',
            street: 'Av. Afonso Pena',
            number: 3997,
            neighborhood: 'Centro',
            city: 'Campo Crande',
            zipcode: 79020000,
            description: 'á la carte fino com destaque ao galeto, costelinha e talharim, com arquitetura e decoração de estilo colonial',
            lat: -20.460178,
            long: -54.598564,
            facebook: 'https://www.facebook.com/CasaColonialCG',
            instagram: 'https://www.instagram.com/casacolonialcg/',
            twitter: 'https://twitter.com',
            whatsapp: 'https://whatsapp.com'
          }
    ]
    return pins.map((pin, index) => {
        return { 
            ...pin, 
            categoryId: categories[index % categories.length],
            userId: users[index % users.length],
            imageIds: ['60689bc939f8713cc87acb83', '6068a568b884f04dbc47e976']
        }
    })
};

@Injectable()
export class PinsSeed {
    constructor(private readonly pinsService: PinsService) { }

    async create(categories, users) {
        console.log("Seeding pins ...");
        const promiseArray = pins(categories, users)
            .map((pin) => this.pinsService.create(pin));
        try {
            return (await Promise.all(promiseArray))
                .map((response) => {
                    console.log(response);
                    return response;
                });
        } catch (error) {
            console.error(error)
        }
    }
}