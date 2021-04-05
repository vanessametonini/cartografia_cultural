import { Injectable } from '@nestjs/common';
import { SupportsService } from '../supports/supports.service';

export const supports = (topics, users) => {
    const supports = [
        {
            status: true,
        },
        {
            status: false,
        },
        {
            status: true,
        },
        {
            status: false,
        }
    ]
    return supports.map((support, index) => {
        return { 
            ...support, 
            topicId: topics[index % topics.length],
            userId: users[index % users.length],
        }
    })
};

@Injectable()
export class SupportsSeed {
    constructor(private readonly supportsService: SupportsService) { }

    async create(categories, users) {
        console.log("Seeding supports ...");
        const promiseArray = supports(categories, users)
            .map((support) => this.supportsService.create(support));
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