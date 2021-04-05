import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { CategoriesSeed } from './seeds.categories';
import { UsersSeed } from './seeds.users';
import { PinsSeed } from './seeds.pins';
import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppSeed {
    constructor(
        private readonly categoriesSeed: CategoriesSeed,
        private readonly usersSeed: UsersSeed,
        private readonly pinsSeed: PinsSeed,
        private readonly configService: ConfigService,
    ) { }

    @Command({
        command: 'create:seeds',
        describe: 'create a app seeds',
        autoExit: true
    })
    async create() {
        await mongoose.connect(this.configService.get<string>('mongourl'));
        const db = mongoose.connection.db;
        for (const collection of await db.listCollections().toArray())
            switch (collection.name) {
                case 'categories': await db.dropCollection('categories'); break;
                case 'users': await db.dropCollection('users'); break;
                case 'pins': await db.dropCollection('pins'); break;
                default: console.log(`The ${collection.name} collection was maintained.`);
            }
        await mongoose.connection.close();
        const categoriesId = await this.categoriesSeed.create();
        const usersId = await this.usersSeed.create(categoriesId);
        const pinsId = await this.pinsSeed.create(categoriesId, usersId);
    }
}