import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
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
import { AppSeed } from './app.seed';

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
    CommandModule,
    CategoriesModule,
    UsersModule,
    AuthModule,
    FilesModule,
    CaslModule,
    PinsModule,
  ],
  controllers: [AppController],
  providers: [AppSeed, AppService],
})
export class AppModule { }
