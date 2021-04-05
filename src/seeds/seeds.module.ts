import { Module } from '@nestjs/common';
import { AppSeed } from './seeds.app';
import { CategoriesSeed } from './seeds.categories';
import { UsersSeed } from './seeds.users';
import { PinsSeed } from './seeds.pins';
import { EventsSeed } from './seeds.events';


import { CategoriesModule } from '../categories/categories.module';
import { UsersModule } from '../users/users.module';
import { PinsModule } from '../pins/pins.module';
import { EventsModule } from '../events/events.module';

@Module({
    imports: [
        CategoriesModule,
        UsersModule,
        PinsModule,
        EventsModule,
    ],
    providers: [
        AppSeed,
        CategoriesSeed,
        UsersSeed,
        PinsSeed,
        EventsSeed,
    ],
})
export class SeedsModule { }
