import { Injectable } from '@nestjs/common';
import { LikesService } from '../likes/likes.service';

export const likes = (topics, replies, users) => {
    const likes = [
        {}, {}, {}, {}, {}, {}, {}, {}
    ]
    return likes.map((like, index) => {
        return { 
            ...like,
            replyId: replies[index % replies.length],
            topicId: topics[index % topics.length],
            userId: users[index % users.length],
        }
    })
};

@Injectable()
export class LikesSeed {
    constructor(private readonly likesService: LikesService) { }

    async create(topics,replies, users) {
        console.log("Seeding likes ...");
        const promiseArray = likes(topics, replies, users)
            .map((like) => this.likesService.create(like));
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