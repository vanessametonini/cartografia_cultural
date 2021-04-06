import { Injectable } from '@nestjs/common';
import { TopicsService } from '../topics/topics.service';

export const topics = (categories, users) => {
    const topics = [
        {
            title: "Dance Fest 1",
            positiveSupports: 0,
            negativeSupports: 0,
            numberOfReplies: 0,
            content: "pula fogueira Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográplesmente uma simulação de texto da indústria tipográfica ede impressos,",
            views: 0,
            createdAt: new Date()
          },
          {
            title: "Dance Fest 2",
            positiveSupports: 0,
            negativeSupports: 0,
            numberOfReplies: 0,
            content: "pula fogueira Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográplesmente uma simulação de texto da indústria tipográfica ede impressos,",
            views: 0,
            createdAt: new Date()
          },
    ]
    return topics.map((topic, index) => {
        const category = categories[index % categories.length];
        return { 
            ...topic,
            userId: users[index % users.length],
            categoryId: category,
            categoriesTagged: [category, category]
        }
    })
};

@Injectable()
export class TopicsSeed {
    constructor(private readonly topicsService: TopicsService) { }

    async create(categories, users) {
        console.log("Seeding topics ...");
        const promiseArray = topics(categories, users)
            .map((topic) => this.topicsService.create(topic));
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