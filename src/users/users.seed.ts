import { Command, Positional, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { identity } from 'rxjs';

@Injectable()
export class UsersSeed {
    constructor(private readonly usersService: UsersService) { }

    @Command({
        command: 'create:users',
        describe: 'create a users',
        autoExit: true 
    })
    async create() {
        const users = [
            {
                firstName: "Aarão",
                lastName: "Melo",
                email: "aarao@mail.com",
                password: "12345678",
                gender: "Masculino",
                ageRange: "Entre 20 e 30 anos",
                education: "Superior completo",
                avatar: "default.png",
                categoryId: "606766011076582ae8314c2c"
            }
        ];
        const promiseArray = users.map((user) => this.usersService.create(user));
        try {
            (await Promise.all(promiseArray))
                .map((response) => console.log(response));
        } catch (error) {
            console.error(error)
        }
    }
}