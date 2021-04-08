import { Injectable } from '@nestjs/common';
import { EventsService } from '../events/events.service';

export const events = (categories, users) => {
    const events = [
        {
            title: "Event 1",
            date: new Date(),
            street: "rua 1",
            neighborhood: "bairro 1",
            city: 'cidade 1',
            zipcode: 69303410,
            number: 1,
            ticket: 1,
            description: 'Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido pegou um modelo de impressão e embaralhou-o para fazer um livro de amostra de tipos.',
            local: 'casa dos eventos',
            link: 'https://www.google.com/',
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/",
            whatsapp: "https://www.whatsapp.com/",
            twitter: "https://www.twitter.com/"
        },
        {
            title: "Event 2",
            date: new Date(),
            street: "rua 2",
            neighborhood: "bairro 2",
            city: 'cidade 2',
            zipcode: 69303420,
            number: 2,
            ticket: 2,
            description: 'Ao contrário da crença popular, Lorem Ipsum não é simplesmente um texto aleatório. Tem raízes em uma peça da literatura clássica latina de 45 aC, com mais de 2.000 anos. ',
            local: 'casa dos eventos',
            link: 'https://www.google.com/',
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/",
            whatsapp: "https://www.whatsapp.com/",
            twitter: "https://www.twitter.com/"
        }
    ]
    return events.map((event, index) => {
        return {
            ...event,
            categoryId: categories[index % categories.length],
            userId: users[index % users.length],
            imageIds: ['60689bc939f8713cc87acb83']
        }
    })
};

@Injectable()
export class EventsSeed {
    constructor(private readonly eventsService: EventsService) { }

    async create(categories, users) {
        console.log("Seeding events ...");
        const promiseArray = events(categories, users)
            .map((event) => this.eventsService.create(event));
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