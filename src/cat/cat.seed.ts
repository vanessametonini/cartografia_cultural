import { Command, Positional, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { CatService } from './cat.service';

@Injectable()
export class CatSeed {
    constructor(private readonly catService: CatService) { }

    @Command({ command: 'create:cat', describe: 'create a cat', autoExit: true })
    async create() {
        const cats = [
            {
                name: 'tom',
                age: 12,
                breed: 'vira'
            },
            {
                name: 'jerry',
                age: 12,
                breed: 'vira'
            }
        ];
        const promiseArray = cats.map((cat) => this.catService.create(cat));
        try {
            return (await Promise.all(promiseArray))
                .map((response) => console.log(response));
        } catch (error) {
            console.error(error)
        }
    }
}