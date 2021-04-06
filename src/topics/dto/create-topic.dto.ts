export class CreateTopicDto {
    categoryId: string;
    userId: string;
    categoriesTagged: string[];
    content: string;
    title: string;
    positiveSupports: number;
    negativeSupports: number;
    numberOfReplies: number;
    views: number;
    createdAt: Date;
}
