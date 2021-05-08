import { Injectable } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';

export const categories = [
    {
        "label": "Artes visuais, Arte urbana e Arte digital",
        "color": "#633D35",
        "legend": "a",
        "value": 1,
        "icon": "1.png"
    },
    {
        "label": "Escultura e Artesanato",
        "color": "#AA4245",
        "legend": "ea",
        "value": 2,
        "icon": "2.png"
    },
    {
        "label": "Dança",
        "color": "#DF694A",
        "legend": "d",
        "value": 3,
        "icon": "3.png"
    },
    {
        "label": "Teatro e Circo",
        "color": "#EAC426",
        "legend": "t",
        "value": 4,
        "icon": "4.png"
    },
    {
        "label": "Cinema, Audiovisual e Fotografia",
        "color": "#EFBC5E",
        "legend": "c",
        "value": 5,
        "icon": "5.png"
    },
    {
        "label": "Educação",
        "color": "#62A06B",
        "legend": "e",
        "value": 6,
        "icon": "6.png"
    },
    {
        "label": "Literatura",
        "color": "#528443",
        "legend": "l",
        "value": 7,
        "icon": "7.png"
    },
    {
        "label": "Música",
        "color": "#0E68D8",
        "legend": "m",
        "value": 8,
        "icon": "8.png"
    },
    {
        "label": "Design e Moda",
        "color": "#0E68D8",
        "legend": "dm",
        "value": 9,
        "icon": "9.png"
    },
    {
        "label": "Gastronomia",
        "color": "#53A4DF",
        "legend": "g",
        "value": 10,
        "icon": "10.png"
    },
    {
        "label": "Patrimônio cultural e Museologia",
        "color": "#95C6DC",
        "legend": "p",
        "value": 11,
        "icon": "11.png"
    },
    {
        "label": "Cultura popular, Folclore e Capoeira",
        "color": "#D390A2",
        "legend": "cp",
        "value": 12,
        "icon": "12.png"
    },
    {
        "label": "Cultura Afro-brasileira",
        "color": "#CC748C",
        "legend": "ca",
        "value": 13,
        "icon": "13.png"
    },
    {
        "label": "Cultura Indígena",
        "color": "#C95676",
        "legend": "ci",
        "value": 14,
        "icon": "14.png"
    },
    {
        "label": "Cultura LGBTQIA+",
        "color": "#8953A5",
        "legend": "cl",
        "value": 15,
        "icon": "15.png"
    },
    {
        "label": "Área Técnica",
        "color": "#489BB5",
        "legend": "at",
        "value": 16,
        "icon": "16.png"
    },
    {
        "label": "Gestor público",
        "color": "#33717F",
        "legend": "gp",
        "value": 17,
        "icon": "17.png"
    },
    {
        "label": "Produtor cultural",
        "color": "#A52131",
        "legend": "pc",
        "value": 18,
        "icon": "18.png"
    },
    {
        "label": "Espaço cultural",
        "color": "#B26457",
        "legend": "ec",
        "value": 19,
        "icon": "19.png"
    },
    {
        "label": "Espaço público",
        "color": "#EA401F",
        "legend": "ep",
        "value": 20,
        "icon": "20.png"
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