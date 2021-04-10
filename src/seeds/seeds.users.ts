import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

export const users = (categories) => {
    const users = [
        {
            firstName: "Aarão",
            lastName: "Melo",
            email: "aarao@mail.com",
            password: "12345678",
            gender: "Masculino",
            ageRange: "Entre 20 e 30 anos",
            education: "Superior completo",
            isAdmin: true,
            confirmToken: 'confirmtoken'
        },
        {
            firstName: "Joe",
            lastName: "Lopes",
            email: "joe@mail.com",
            password: "12345678",
            gender: "Masculino",
            ageRange: "Entre 20 e 30 anos",
            education: "Superior completo",
            isAdmin: false,
            confirmToken: 'confirmtoken'
        }
    ]
    return users.map((user, index) => {
        return {
            ...user,
            categoryId: categories[index % categories.length],
            avatarId: '60689bc939f8713cc87acb83',
        }
    })
};

@Injectable()
export class UsersSeed {
    constructor(private readonly usersService: UsersService) { }

    async create(categories) {
        console.log("Seeding users ...");
        const promiseArray = users(categories)
            .map((user) => this.usersService.create(user));
        try {
            return (await Promise.all(promiseArray))
                .map((response) => {
                    console.log(response);
                    return response.id;
                });
        } catch (error) {
            console.error(error)
        }
    }
}