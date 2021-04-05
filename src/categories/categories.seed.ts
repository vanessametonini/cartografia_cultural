import { Injectable } from '@nestjs/common';
import { CategoriesService } from './categories.service';

export const categories = [
    {
        label: "Artes visuais, arte urbana e arte digital",
        color: "#633D35",
        legend: "a",
        value: 1,
        icon: "1.png"
    },
    {
        label: "Escultura e Artesanato",
        color: "#AA4245",
        legend: "e",
        value: 2,
        icon: "2.png"
    },
    {
        label: "Dança",
        color: "#DF694A",
        legend: "d",
        value: 3,
        icon: "3.png"
    },
    {
        label: "Teatro e Circo",
        color: "#E0BC68",
        legend: "t",
        value: 4,
        icon: "4.png"
    },
    {
        label: "Cinema e Audiovisual",
        color: "#EFBC5E",
        legend: "c",
        value: 5,
        icon: "5.png"
    },
    {
        label: "Fotografia",
        color: "#62A06B",
        legend: "f",
        value: 6,
        icon: "6.png"
    },
    {
        label: "Literatura",
        color: "#528443",
        legend: "l",
        value: 7,
        icon: "7.png"
    },
    {
        label: "Design e Moda",
        color: "#2C4A25",
        legend: "d",
        value: 8,
        icon: "8.png"
    },
    {
        label: "Música",
        color: "#0E68D8",
        legend: "m",
        value: 9,
        icon: "9.png"
    },
    {
        label: "Patrimônio cultural e Museologia",
        color: "#53A4DF",
        legend: "p",
        value: 10,
        icon: "10.png"
    },
    {
        label: "Cultura popular, Folclore e Capoeira",
        color: "#95C6DC",
        legend: "c",
        value: 11,
        icon: "11.png"
    },
    {
        label: "Gastronomia",
        color: "#D390A2",
        legend: "g",
        value: 12,
        icon: "12.png"
    },
    {
        label: "Cultura Afro-brasileira",
        color: "#CC748C",
        legend: "c",
        value: 13,
        icon: "13.png"
    },
    {
        label: "Cultura Indígena",
        color: "#C95676",
        legend: "c",
        value: 14,
        icon: "15.png"
    },
    {
        label: "Gestores Públicos",
        color: "#BB7165",
        legend: "g",
        value: 15,
        icon: "15.png"
    },
    {
        label: "Produtor Cultural",
        color: "#AA4245",
        legend: "p",
        value: 16,
        icon: "16.png"
    },
    {
        label: "Espaços culturais",
        color: "#633D35",
        legend: "e",
        value: 17,
        icon: "17.png"
    },
    {
        label: "Espaços públicos",
        color: "#DF694A",
        legend: "e",
        value: 18,
        icon: "18.png"
    }
];

@Injectable()
export class CategoriesSeed {
    constructor(private readonly categoriesService: CategoriesService) { }

    async create() {
        console.log("Seeding categories ...");
        const promiseArray = categories.map((category) => this.categoriesService.create(category));
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