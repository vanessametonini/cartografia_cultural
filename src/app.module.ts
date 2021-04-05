import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { CaslModule } from './casl/casl.module';
import { PinsModule } from './pins/pins.module';
import configuration from './config/configuration';
import { SeedsModule } from './seeds/seeds.module';
import { EventsModule } from './events/events.module';
import { TopicsModule } from './topics/topics.module';
import { SupportsModule } from './supports/supports.module';
import { RepliesModule } from './replies/replies.module';
import { LikesModule } from './likes/likes.module';
import { RejoindersModule } from './rejoinders/rejoinders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: [
        '.env.local',
        '.env',
        '.env.development.local',
        '.env.development'
      ],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongourl'),
      }),
      inject: [ConfigService],
    }),
    CategoriesModule,
    UsersModule,
    AuthModule,
    FilesModule,
    CaslModule,
    PinsModule,
    SeedsModule,
    EventsModule,
    TopicsModule,
    SupportsModule,
    RepliesModule,
    LikesModule,
    RejoindersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
