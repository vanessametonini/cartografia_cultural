import { Module } from '@nestjs/common';
import { AppSeed } from './seeds.app';
import { CategoriesSeed } from './seeds.categories';
import { UsersSeed } from './seeds.users';
import { PinsSeed } from './seeds.pins';

import { CategoriesModule } from '../categories/categories.module';
import { UsersModule } from '../users/users.module';
import { PinsModule } from '../pins/pins.module';

@Module({
    imports: [
        CategoriesModule,
        UsersModule,
        PinsModule,
    ],
    providers: [
        AppSeed,
        CategoriesSeed,
        UsersSeed,
        PinsSeed,
    ],
})
export class SeedsModule { }
