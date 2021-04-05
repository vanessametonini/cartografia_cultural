import { Injectable } from '@nestjs/common';
import { RejoindersService } from '../rejoinders/rejoinders.service';

export const rejoinders = (topics, replies, users) => {
    const rejoinders = [
        {}, {}, {}, {}, {}, {}, {}, {}
    ]
    return rejoinders.map((like, index) => {
        return { 
            ...like,
            content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
            replyId: replies[index % replies.length],
            topicId: topics[index % topics.length],
            userId: users[index % users.length],
        }
    })
};

@Injectable()
export class RejoindersSeed {
    constructor(private readonly rejoindersService: RejoindersService) { }

    async create(topics,replies, users) {
        console.log("Seeding rejoinders ...");
        const promiseArray = rejoinders(topics, replies, users)
            .map((rejoinder) => this.rejoindersService.create(rejoinder));
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