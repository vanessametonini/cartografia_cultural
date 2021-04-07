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
            description: "descrição 1",
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
            description: "descrição 2",
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