import { Command, Positional, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { CatService } from './cat.service';

@Injectable()
export class CatCommand {
    constructor(private readonly catService: CatService) { }

    @Command({ command: 'create:cat', describe: 'create a cat', autoExit: true })
    async create() {
        const cat = await this.catService.create({
            name: 'catttt',
            age: 12,
            breed: 'vira'
        });
        console.log(cat);
    }
}