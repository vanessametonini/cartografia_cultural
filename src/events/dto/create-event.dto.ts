export class CreateEventDto {
    categoryId: string;
    userId: string;
    imageIds: string[];
    title: string;
    date: Date;
    street: string;
    neighborhood: string
    city: string;
    zipcode: number;
    number: number;
    ticket: number;
    description: string;
    facebook: string;
    instagram: string;
    whatsapp: string;
    twitter: string;
}
